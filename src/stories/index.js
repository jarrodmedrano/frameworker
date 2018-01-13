import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import Button from '../components/Button';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('linktype', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
  .add('submit', () => <Button myType="submit" onClick={action('clicked')}>Submit Button</Button>);