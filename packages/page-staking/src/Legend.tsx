// Copyright 2017-2023 @polkadot/app-staking authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@polkadot/util';

import React from 'react';
import styled from 'styled-components';

import { Badge, Icon } from '@polkadot/react-components';

import { useTranslation } from './translate';

interface Props {
  className?: string;
  isRelay?: boolean;
  minCommission?: BN;
}

function Legend ({ className, isRelay, minCommission }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <span>
        <Badge
          color='blue'
          icon='chevron-right'
        />
        {t('Next session')}
      </span>
      {minCommission && (
        <span>
          <Badge
            color='red'
            icon='cancel'
          />
          {t('Chilled')}
        </span>
      )}
      {isRelay && (
        <span>
          <Badge
            color='purple'
            icon='vector-square'
          />
          {t('Para validator')}
        </span>
      )}
      <span>
        <Badge
          color='green'
          info='5'
        />
        {t('Produced blocks')}
      </span>
      <span>
        <Badge
          color='green'
          info={<Icon icon='envelope' />}
        />
        {t('Online message')}
      </span>
      <span>
        <Badge
          color='green'
          icon='hand-paper'
        />
        {t('Nominating')}
      </span>
      <span>
        <Badge
          color='red'
          icon='balance-scale-right'
        />
        {t('Oversubscribed')}
      </span>
      <span>
        <Badge
          color='red'
          icon='skull-crossbones'
        />
        {t('Slashed')}
      </span>
      <span>
        <Badge
          color='red'
          icon='user-slash'
        />
        {t('Blocks nominations')}
      </span>
    </div>
  );
}

export default React.memo(styled(Legend)`
  font-size: 0.85rem;
  padding: 1rem 0.5rem;
  text-align: center;

  .ui--Badge {
    margin-right: 0.5rem;
  }

  span+span {
    margin-left: 1rem;
  }
`);
