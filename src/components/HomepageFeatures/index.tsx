import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/lyxia.svg').default,
    description: (
      <>
        With lyxia you can host your projects easily without having any issues as we have created tutorials for literally every step.
      </>
    ),
  },
  {
    title: 'Focus on Quality',
    Svg: require('@site/static/img/lyxia.svg').default,
    description: (
      <>
        We provide quality hosting to all our free and paid users. we don't compromise in anything realted to hosting.
      </>
    ),
  },
  {
    title: 'Always free commitment',
    Svg: require('@site/static/img/lyxia.svg').default,
    description: (
      <>
        At Lyxia, we are committed to providing free hosting for all users, even if you are a free user, you will get the same quality hosting as a paid user.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
