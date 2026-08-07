import { useDegree } from '../../../../hooks';
import { aboutSections } from '../../navigation/about-sections';

import SectionLayout from '../../../layout/SectionLayout';
import Card from '../../../common/Card';
import Divider from '../../../common/Divider';
import Icon from '../../../common/icon/Icon';
import Text from '../../../common/Text';
import { AppIconSvg } from '@app-portfolio/enums';

/**
 * Composant des certifications de l'utilisateur
 * @returns {JSX.Element}
 */
const UserDegrees = (): React.JSX.Element => {
  const { userDegrees } = useDegree();

  const section = aboutSections.find((s) => s.id === 'certifications')!;

  return (
    <SectionLayout id={section.id} title={section.label}>
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
        {userDegrees.map((degree) => (
          <Card key={degree.id} additionalClass="flex flex-col gap-4">
            <div className="flex gap-4">
              <Icon name={AppIconSvg.DEGREE} size="30" color="var(--primary)" className="mt-2" />
              <div className="flex grow flex-col gap-4">
                <div className="flex flex-col flex-wrap sm:h-[4.3rem] lg:h-auto">
                  <Text as="p" className="font-title-bold text-lg text-primary">
                    {degree.label}
                  </Text>

                  <Text as="p" className="text-sm truncate text-text-primary">
                    {degree.degree}
                  </Text>
                </div>
              </div>
            </div>

            <Divider />

            <Text as="p" className="text-sm text-text-secondary">
              {`Année : ${degree.year}`}
            </Text>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default UserDegrees;
