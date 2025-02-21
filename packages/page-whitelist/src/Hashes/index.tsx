// Copyright 2017-2023 @polkadot/app-whitelist authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SubmittableExtrinsicFunction } from '@polkadot/api/types';

import React, { useRef } from 'react';

import { Table } from '@polkadot/react-components';

import { useTranslation } from '../translate';
import useHashes from '../useHashes';
import Details from './Details';
import Summary from './Summary';

interface Props {
  className?: string;
  defaultPropose?: SubmittableExtrinsicFunction<'promise'>;
  filter?: (section: string, method?: string) => boolean;
}

function Hashes ({ className }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const hashes = useHashes();

  const headerRef = useRef([
    [t('calls'), 'start'],
    [undefined, 'all'],
    [undefined, 'media--1300']
  ]);

  return (
    <div className={className}>
      <Summary hashes={hashes} />
      <Table
        className={className}
        empty={hashes && t<string>('No call hashes found')}
        header={headerRef.current}
      >
        {hashes && hashes.map((h) => (
          <Details
            key={h}
            value={h}
          />
        ))}
      </Table>
    </div>
  );
}

export default React.memo(Hashes);
