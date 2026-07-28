import { useExperience } from '../../../hooks';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import SectionLayout from '../../layout/SectionLayout';
import Image from '../../common/Image';
import UserExtendedItemCard from './UserExtendedItemCard';

const UserExperience = () => {
  const { userExperiences } = useExperience();

  return (
    <SectionLayout title="Expériences">
      <VerticalTimeline lineColor="var(--secondary)" layout="1-column-left">
        {userExperiences.map((experience, index) => (
          <VerticalTimelineElement
            key={experience.id}
            position={index % 2 === 0 ? 'left' : 'right'}
            contentStyle={{
              background: 'transparent',
              padding: 0,
              boxShadow: 'none',
              fontSize: '0.875rem',
            }}
            contentArrowStyle={{
              background: 'var(--background)',
              borderRight: '7px solid var(--divider)',
            }}
            icon={
              <Image
                src={experience.company.logo}
                alt={`Logo de ${experience.company.name}`}
                className="object-cover rounded-full w-4/5 h-4/5"
              />
            }
            iconStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--background)',
              boxShadow: '0 0 0 2px var(--secondary)',
            }}
          >
            <UserExtendedItemCard item={experience} />
          </VerticalTimelineElement>
        ))}

        <div className="vertical-timeline-marker-start w-2.5 h-2.5 bg-secondary rounded-full" />
      </VerticalTimeline>
    </SectionLayout>
  );
};

export default UserExperience;
