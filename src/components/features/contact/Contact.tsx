import { useTheme } from "../../../contexts";
import { useProfile } from "../../../hooks";

import Icon from "../../common/Icon";
import Text from "../../common/Text";

const Contact = () => {
  const theme = useTheme();

  const { profile } = useProfile();

  return (
    <section className="flex justify-between w-full gap-2 sm:flex-col sm:w-auto lg:fixed lg-left-0 lg:bottom-0 lg:mb-5 lg:ml-7">
      <div className="flex items-center gap-2">
        <Icon name="svg-mail" size="20" color={theme.colors.light} />
        <Text style="text-xss">{profile.email}</Text>
      </div>
      <div className="flex items-center gap-2">
        <Icon name="svg-phone" size="20" color={theme.colors.light} />
        <Text style="text-xss">{profile.phone}</Text>
      </div>
    </section>
  );
};

export default Contact;
