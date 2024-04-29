import clsx from 'clsx';
import GridLayout from '@components/GridLayout';
import PageSection from '@components/PageSection';
import CardWrapper from '@components/CardWrapper';
import Text from '@components/Text';

type Feature = {
  title: string;
  description: string;
  icon: string;
  className?: string;
  url: string;
};

type BlackFeatureCardsProps = {
  features: Array<Feature>;
  className?: string;
};

const BlackFeatureCards: React.FC<BlackFeatureCardsProps> = ({
  features,
  className,
}) => (
  <div className="docs-cards-container">
    <PageSection>
      <div className="relative">
        <div className="py-40 text-center font-sans text-20 font-medium leading-[100%] md:text-25 2xl:text-39">
          Resources
        </div>
      </div>
      <GridLayout className={clsx('gap-y-10 py-24 pb-80 pt-0', className)}>
        <img
          src="/svg/dotted-squiggle-bg.svg"
          alt="bg-squiggle"
          className="absolute left-0 top-0 h-full w-full"
          // TODO: original has support for blur, solve
          // placeholder="blur"
          width={1440}
          height={540}
        />
        {features.map((feature, index) => (
          <CardWrapper
            key={index}
            className={clsx(
              'border-lg col-span-16 md:col-span-16 lg:col-span-4',
              (!index || index % 3 === 0) && 'lg:col-start-3',
            )}
          >
            <a href={feature.url}>
              <div className="flex flex-col items-center gap-16 py-16 text-center lg:items-start lg:text-start">
                <img
                  src={feature.icon}
                  alt="globe with bolt"
                  width={64}
                  height={64}
                />
                <Text
                  style="h5"
                  className="max-w-[250px] whitespace-pre-wrap text-ui-light-grey"
                >
                  {feature.title}
                </Text>
                <Text style="m" className="text-ui-light-grey">
                  {feature.description}
                </Text>
              </div>
            </a>
          </CardWrapper>
        ))}
      </GridLayout>
    </PageSection>
  </div>
);

export default BlackFeatureCards;
