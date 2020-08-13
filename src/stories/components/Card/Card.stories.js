import React from 'react';
import { withKnobs, text, object } from "@storybook/addon-knobs";
import CustomCard from '../../../components/Card/Card';
import 'semantic-ui-css/semantic.min.css';
export default {
    title: 'Card',
    component: CustomCard,
    decorators: [withKnobs]
};

export const Card = () => {
    const type = text('Type', 'profile');
    const card = object('Card Data', {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm-Adw_uLOqGFlqtiCspJiZBQ8FTH7jG6c5pcis-sUq5Z-aTcu&s',
        name: 'John Smith',
        email: 'john.smith@gmail.com',
        phone: '+919895098950',
        icon: 'home',
        title: 'Home Icon',
        utils: {
            config: 'Config',
            i18n: 'general.profile',
            helper: 'helper config'
        }
    });


    return <CustomCard type={type} card={card} />
}
