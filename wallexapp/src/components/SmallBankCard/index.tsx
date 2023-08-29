import React from 'react';

type Props = {};

function SmallBankCard({}: Props) {
  return (
    <svg width="31" height="21" viewBox="0 0 31 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="31" height="21" rx="3" fill="#E4DEDF" />
      <rect y="3" width="31" height="4" fill="#798486" />
      <text
        fill="#798486"
        fontSize="10px"
        x="50%"
        y="70%"
        dominant-baseline="middle"
        text-anchor="middle">
        1337
      </text>
    </svg>
  );
}

export default SmallBankCard;
