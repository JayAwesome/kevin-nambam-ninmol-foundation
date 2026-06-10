# Final Security Validation Report

Project: Kevin NanBam Ninmol Foundation website
Date: 2026-06-10
Build target: Static prerendered Vite/React site deployed from `dist/` to cPanel `public_html`

## Executive Summary

The website was reviewed against the requested OWASP-focused checklist. The application is currently a static/prerendered website with no database, no backend API, no login system, and no admin panel in the deployed React router. No Critical or High severity vulnerabilities were found in the deployed static application after remediation.

Production readiness status: Ready to deploy.

Overall security posture score: 8.5 / 10 for the current static-site architecture.

## Remediation Applied

1. Form hardening
   - Added shared public-form validation in `src/utils/formSecurity.js`.
   - Added input sanitization, email validation support, link/script spam detection, honeypot checks, rapid-submit blocking, and local per-form rate limiting.
   - Added privacy-safe local security event logging for blocked bot, spam, rapid, and rate-limited submissions.
   - Applied validation to Contact, Volunteer/Get Involved, Newsletter, and Events forms.

2. FAQ assistant hardening
   - Normalized displayed user input before echoing messages in the assistant UI.
   - The assistant remains client-only and does not send user text to an external service.

3. Security headers
   - Hardened `public/.htaccess` and confirmed it is copied into `dist/.htaccess`.
   - Enforced HTTPS redirect, HSTS, CSP, clickjacking protection, nosniff, referrer policy, permissions policy, cross-origin policies, and directory listing prevention.
   - Denied public access to sensitive file patterns such as `.env`, package files, Vite config, `.cpanel.yml`, logs, configs, SQL dumps, shell scripts, PowerShell scripts, INI files, backups, and deployment zip files.

4. Donation page integrity
   - Donation account values are hardcoded in frozen constants in `src/pages/DonatePage.jsx`.
   - Copy-to-clipboard validates the account number against a strict 10-digit pattern before copying.
   - No user input is accepted on the donation page.
   - The donation page is prerendered in static HTML, so the correct GTBank account numbers are visible without JavaScript.

5. Production build hardening
   - Production build has no source maps.
   - Generated `dist/` contains no `.env`, `.map`, package metadata, Vite config, scripts, logs, SQL files, shell scripts, PowerShell scripts, PHP files, or deployment zip files.
   - All built media references resolve.

## Security Issues Discovered

### Medium: Public forms were placeholder-only and lacked abuse controls

Risk: Automated spam or scripted submissions could abuse client-side forms once connected to a backend.

Remediation: Added shared sanitization, honeypot, rapid-submit blocking, per-form rate limiting, email validation, and privacy-safe event logging. These controls reduce abuse now and provide a safer foundation for future backend integration.

Remaining recommendation: Add server-side validation, CAPTCHA, IP-based rate limiting, and backend audit logging when a real backend or email workflow is connected.

### Low: CSP requires an inline-script exception

Risk: `script-src 'unsafe-inline'` is weaker than a strict nonce/hash CSP.

Reason: The site currently includes prerendered JSON-LD structured data and a small theme initialization script for dark-mode preference before hydration.

Mitigation: CSP still restricts scripts to self, blocks inline event-handler attributes with `script-src-attr 'none'`, blocks objects, restricts frames, restricts forms, upgrades insecure requests, and allows only self-hosted media/images.

Future improvement: Move the theme initialization into an external bundled script and adopt nonce/hash-based CSP for structured data if the deployment pipeline supports generating stable page-level hashes.

### Low: Source media folder includes a non-deployed `.picasa.ini`

Risk: INI files should not be publicly served.

Remediation/Status: The file is not in the deployable `public/` or `dist/` media output. `.htaccess` denies `.ini` files if accidentally uploaded.

### Informational: Static architecture limits server-grade controls

Risk: RBAC, secure sessions, CSRF tokens, failed-login monitoring, server rate limiting, and server-side security logs cannot exist without a backend/admin system.

Status: No admin routes, login routes, API endpoints, database calls, or session cookies were found in the deployed app. These items are not applicable until backend functionality is added.

## OWASP Review Results

Broken Access Control: No admin panel, protected routes, or privileged actions exist in the deployed app.

Cryptographic Failures: No passwords, tokens, cookies, payment secrets, or sensitive user data are processed by the static app.

Injection: No SQL, NoSQL, command execution, file inclusion, or server-side template rendering exists. Public forms sanitize text and React output encoding is used for rendering.

Insecure Design: Donation data is single-purpose, static, and not user-modifiable through app logic. Forms are protected against common client-side spam patterns.

Security Misconfiguration: `.htaccess` enforces security headers, disables directory listing, blocks sensitive files, and redirects HTTP to HTTPS.

Vulnerable Components: `npm audit --audit-level=high` returned 0 vulnerabilities.

Authentication Weaknesses: No authentication system exists in the deployed app.

Software and Data Integrity Failures: Deployment output excludes source maps, secrets, package metadata, and development config. Donation account numbers are fixed constants.

Logging and Monitoring Failures: Client-side blocked-form events are logged locally without sensitive content. Server-side monitoring should be configured at cPanel, CDN, or future backend level.

SSRF: No server-side fetch or proxy functionality exists.

## Security Headers Status

Implemented in `dist/.htaccess`:

- `Content-Security-Policy`
- `Strict-Transport-Security`
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy`
- `X-Permitted-Cross-Domain-Policies: none`
- `Cross-Origin-Resource-Policy: same-origin`
- `Cross-Origin-Opener-Policy: same-origin-allow-popups`
- `Options -Indexes`
- HTTP to HTTPS redirect
- Sensitive file deny rules

## Dependency Status

Command run:

```powershell
npm audit --audit-level=high
```

Result:

```text
found 0 vulnerabilities
```

## File and Media Security

Validated deployable public media in `public/`:

- Approved extensions only: `.jpg`, `.jpeg`, `.webp`, `.mp4`, `.txt`, `.htaccess`
- Image and video file signatures passed.
- No executable file types were found in deployable media.
- No `.env`, scripts, SQL files, PHP files, shell files, logs, or source maps are present in `dist/`.

## Donation Page Protection

The donation page contains only:

- Page header
- GTBank donation account cards for NGN, USD, EUR, and GBP
- Copy buttons

Validation:

- `3003292343` NGN
- `3003292446` USD
- `3003292642` EUR
- `3003292666` GBP
- Bank: Guaranty Trust Bank (GTBank)

Important note: No website can prevent a visitor from locally editing their own browser DOM with DevTools. The implemented protection ensures the deployed source is static, prerendered, controlled by the build, protected by CSP, and has no app-level input path that can persistently alter donation account information.

## Production Validation Commands

Commands completed successfully:

```powershell
npm run build
npm audit --audit-level=high
git diff --check
```

Post-build checks:

- `dist/.htaccess` includes the required security headers.
- All built media references exist.
- `dist/` contains only deployable static assets and route files.
- No High or Critical dependency vulnerabilities remain.

## Remaining Recommendations

1. Add backend-side CAPTCHA, IP-based rate limiting, and server-side logging when forms are connected to email, CRM, or database workflows.
2. Configure cPanel, Cloudflare, or hosting-level logs and alerts for suspicious requests, repeated 404s, and brute-force attempts.
3. Keep uploading only the contents of `dist/` to `public_html`.
4. Do not upload source folders such as `src`, `Images`, `Video`, `scripts`, `audit`, `node_modules`, or root zip files.
5. Review CSP again if third-party payment widgets, analytics, or live chatbot services are added later.

## Final Production Readiness Assessment

Critical findings: 0
High findings: 0
Medium findings: 1 remediated with frontend controls and backend recommendation
Low findings: 2 documented with mitigations

Deployment rule status: Passed.

Production-ready status: Ready to deploy as a static public website.
