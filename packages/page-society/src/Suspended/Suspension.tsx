// Copyright 2017-2023 @polkadot/app-society authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, BalanceOf } from '@polkadot/types/interfaces';
import type { PalletSocietyBidKind } from '@polkadot/types/lookup';

import React from 'react';

import { AddressSmall } from '@polkadot/react-components';
import { FormatBalance } from '@polkadot/react-query';

import BidType from '../Candidates/BidType';

interface Props {
  balance?: BalanceOf;
  bid?: PalletSocietyBidKind;
  value: AccountId;
}

function Suspension ({ balance, bid, value }: Props): React.ReactElement<Props> {
  return (
    <tr>
      <td className='address all'>
        <AddressSmall value={value} />
      </td>
      <td className='start'>
        <BidType value={bid} />
      </td>
      <td className='number'>
        {balance && (
          <FormatBalance value={balance} />
        )}
      </td>
    </tr>
  );
}

export default React.memo(Suspension);
