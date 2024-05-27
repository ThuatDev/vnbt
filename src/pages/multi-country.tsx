import Link from 'next/link';
import React from 'react';

const MultiCountry = () => {
  return (
    <>
      <div className="flex space-x-4 p-4">
        <Link href="/multi-country/from-vietnam">Cycling from Vietnam</Link>
        <Link href="/multi-country/from-cambodia">Cycling from Cambodia</Link>
        <Link href="/multi-country/from-thailand">Cycling from Thailand</Link>
        <Link href="https://www.facebook.com/MyanmarBicycleTours">Cycling Myanmar</Link>
      </div>
    </>
  );
}

export default MultiCountry;