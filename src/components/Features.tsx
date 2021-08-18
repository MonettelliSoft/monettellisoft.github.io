import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import FeatureCard from './FeatureCard';

import styles from './Features.module.scss';

const FEATURES = [
  {
    image: '/img/features/lock.svg',
    title: translate({ message: 'Harmonic interfaces' }),
    subtitle: translate({
      message:
        'If you want to use all benefits of npm package system in your company without sending all the code to the public, and use your private packages just as easy as public ones.',
    }),
  },
  {
    image: '/img/features/link.svg',
    title: translate({ message: 'Easy maintenance.' }),
    subtitle: translate({
      message:
        'If you use multiple registries in your organization and need to fetch packages from multiple sources in one single project, you can chain multiple registries and fetch from one single endpoint.',
    }),
  },
  {
    image: '/img/features/box.svg',
    title: translate({ message: 'Beautiful applications.' }),
    subtitle: translate({
      message:
        'If you have more than one server which you want to install packages from, you might want to use this to decrease latency and provide limited failover.',
    }),
  },
  {
    image: '/img/features/override.svg',
    title: translate({ message: 'Always think scalability' }),
    subtitle: translate({
      message:
        'If you want to use a modified version of some 3rd-party package, you can publish your version locally under the same name.',
    }),
  },
];

const Features = (): React.ReactElement => (
  <section className={styles.features}>
    <div className={styles['features--wrap']}>
      {FEATURES.map(({ image, title, subtitle }) => (
        <FeatureCard key={title} image={useBaseUrl(image)} title={title} subtitle={subtitle} />
      ))}
    </div>
    <div className={styles.linkFeatures}>
    </div>
  </section>
);

export default Features;
