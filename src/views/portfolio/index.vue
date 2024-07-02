<script lang="ts">
import type { HighligtherList } from './components/highlighter.vue'
import ParagraphView from './components/paragraph.vue'
import SeparatorView from './components/separator.vue'
import HighlighterView from './components/highlighter.vue'
import LinkerView from './components/linker.vue'
import CopyrightView from '../../components/copyright.vue'

export default {
  name: 'PortfolioView',
  components: {
    ParagraphView,
    SeparatorView,
    HighlighterView,
    LinkerView,
    CopyrightView
  },
  data: (): HighligtherList => {
    return {
      mainHighlightsList: [
        'Javascript',
        'ES6',
        'Typescript',
        'React.js',
        'Node.js',
        'HTML5',
        'CSS3',
        'SASS',
        'Jest',
        'Vitest',
        'Cypress'
      ],
      goodHighlightsList: [
        'Next.js',
        'Webpack',
        'babel',
        'Angular',
        'Vue.js',
        'Playwright',
        'bash'
      ],
      agileHighlightsList: [
        'Kanban',
        'Scrum',
        'Problem solver',
        'Feedback promoter',
        'Coaching',
        'Knowledge sessions promoter'
      ],
      curiosityHighlightsList: ['Jenkins', 'Docker', 'Python', 'C#', 'Java', 'AI'],
      extraHighlightsList: ['music', 'art', 'concerts', 'museums', 'exhibitions', 'formula1']
    }
  }
}
</script>

<template>
  <main>
    <h1 class="content">axel</h1>

    <ParagraphView text="I am Alessandro Rabitti, or axel, a Frontend Engineer based in Berlin." />

    <Separator source="./images/1-ai.jpg" />

    <ParagraphView
      text="I build robust applications based on modern stack and I love to check the evolution of the technologies."
    />

    <ParagraphView
      text="My focus is on writing simple, modular and functional code, from smaller to larger projects."
    />

    <ParagraphView
      text="I appreciate the logic and technical aspects of the applications I work for."
    />

    <SeparatorView source="./images/2-office.jpg" />

    <ParagraphView
      text="I love to be involved in ambitious and challenging projects where I can offer solutions and creativity."
    />

    <ParagraphView text="I get inspired by working with amazing and open-minded colleagues." />

    <SeparatorView source="./images/3-keyboard.jpg" />

    <ParagraphView text="I am a strong supporter of Agile methodologies." />

    <ParagraphView
      text="I feel motivated to help agile transformation in the environment I work for."
    />

    <SeparatorView source="./images/4-code.jpg" />

    <HighlighterView section="main" v-bind:highlightsList="mainHighlightsList" />

    <HighlighterView section="good" v-bind:highlightsList="goodHighlightsList" />

    <HighlighterView section="agile" v-bind:highlightsList="agileHighlightsList" />

    <HighlighterView section="curious" v-bind:highlightsList="curiosityHighlightsList" />

    <SeparatorView source="./images/5-statue.jpg" />

    <HighlighterView section="and" v-bind:highlightsList="extraHighlightsList" />

    <SeparatorView source="./images/6-contacts.jpg" />

    <ParagraphView text="Interested in having a chat? writeme AT alessandrorabitti DOT com" />

    <LinkerView text="CV" link="./media/CV-AR-EN.pdf" />

    <LinkerView text="LinkedIn" link="https://www.linkedin.com/in/alessandrorabitti/" />

    <LinkerView text="github" link="https://github.com/silversonicaxel" />

    <LinkerView text="X" link="https://twitter.com/silversonicaxel" />

    <LinkerView text="mail" link="mailto:writeme@alessandrorabitti.com" target="_self" />

    <CopyrightView />
  </main>
</template>

<style lang="scss">
$primary-color: #070e14;
$secondary-color: #fafafa;

h1 {
  position: relative;

  &::after {
    content: '';
    border-bottom-color: $primary-color;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    position: absolute;
    right: 0;
    top: 50%;
    width: 50%;
    z-index: 1;

    @media (prefers-color-scheme: dark) {
      border-bottom-color: $secondary-color;
    }
  }
}

div {
  .text {
    padding: {
      bottom: 10rem;
      top: 2.5rem;
    }

    transform: skewY(3deg);
    width: calc(100% - 0.6rem);

    @media (min-width: 768px) and (max-width: 1024px) {
      padding: {
        bottom: 5rem;
        top: 1.5rem;
      }
    }

    @media (max-width: 767px) {
      padding: {
        bottom: 3rem;
        top: 1rem;
      }
    }
  }
}
</style>
