import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import Button from '../components/Button';
import Hero from '../components/Hero';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('linktype', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
  .add('submit', () => <Button myType="submit" onClick={action('clicked')}>Submit Button</Button>);

storiesOf('Hero', module)
  .add('with text', () => <Hero>
    <h1 className="title">Section</h1>
    <h2 className="subtitle">
      A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
    </h2>
  </Hero>);