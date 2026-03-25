import { useEffect } from 'react';

function usePageTitle(title) {
  useEffect(() => {
    document.title = `${title} | Kevin Nambam Ninmol Foundation`;
  }, [title]);
}

export default usePageTitle;
