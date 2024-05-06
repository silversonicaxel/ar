<template>
  <main>
    <h1 class="content">axel</h1>

    <Paragraph text="I am Alessandro Rabitti, a Frontend Engineer based in Berlin." />

    <Separator source="./images/1-ai.jpg" />

    <Paragraph
      text="I build robust applications based on modern stack and I love to check the evolution of the technologies."
    />

    <Paragraph
      text="My focus is on writing simple, modular and functional code, from smaller to larger projects."
    />

    <Paragraph
      text="I appreciate the logic and technical aspects of the applications I work for."
    />

    <Separator source="./images/2-office.jpg" />

    <Paragraph
      text="I love to be involved in ambitious and challenging projects where I can offer solutions and creativity."
    />

    <Paragraph text="I get inspired by working with amazing and open-minded colleagues." />

    <Separator source="./images/3-keyboard.jpg" />

    <Paragraph text="I am a strong supporter of Agile methodologies." />

    <Paragraph
      text="I feel motivated to help agile transformation in the environment I work for."
    />

    <Separator source="./images/4-code.jpg" />

    <Highlighter section="main" v-bind:highlightsList="mainHighlightsList" />

    <Highlighter section="good" v-bind:highlightsList="goodHighlightsList" />

    <Highlighter section="agile" v-bind:highlightsList="agileHighlightsList" />

    <Highlighter section="curious" v-bind:highlightsList="curiosityHighlightsList" />

    <Separator source="./images/5-statue.jpg" />

    <Highlighter section="and" v-bind:highlightsList="extraHighlightsList" />

    <Separator source="./images/6-contacts.jpg" />

    <Paragraph text="Interested in having a chat? writeme AT alessandrorabitti DOT com" />

    <Linker text="CV" link="./media/CV-AR-EN.pdf" />

    <Linker text="LinkedIn" link="https://www.linkedin.com/in/alessandrorabitti/" />

    <Linker text="github" link="https://github.com/silversonicaxel" />

    <Linker text="x" link="https://twitter.com/silversonicaxel" />

    <Linker text="mail" link="mailto:writeme@alessandrorabitti.com" target="_self" />

    <Footer />
  </main>
</template>

<script lang="ts">
import Paragraph from './components/paragraph.vue'
import Separator from './components/separator.vue'
import Highlighter, { HighligtherList } from './components/highlighter.vue'
import Linker from './components/linker.vue'
import Footer from '../../components/footer.vue'

export default {
  name: 'Portfolio',
  components: {
    Paragraph,
    Separator,
    Highlighter,
    Linker,
    Footer,
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
        'Cypress',
      ],
      goodHighlightsList: ['Webpack', 'babel', 'Angular', 'Vue.js', 'bash'],
      agileHighlightsList: [
        'Kanban',
        'Scrum',
        'Problem solver',
        'Feedback promoter',
        'Coaching',
        'Knowledge sessions promoter',
      ],
      curiosityHighlightsList: ['Jenkins', 'Docker', 'Python', 'C#', 'Java'],
      extraHighlightsList: ['music', 'art', 'concerts', 'museums', 'exhibitions', 'boulder'],
    }
  },
}
</script>

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
</style>
