<template>
  <main>
    <h1 class="content">devAAA</h1>

    <Paragraph text="I am Alessandro Rabitti, a Frontend Engineer based in Amsterdam." />

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

    <footer>
      © copyright
      <a href="http://alessandrorabitti.com">alessandrorabitti.com</a>
      2021 - KVK 74007262
    </footer>
  </main>
</template>

<script lang="ts">
import Paragraph from './components/paragraph.vue'
import Separator from './components/separator.vue'
import Highlighter, { HighligtherList } from './components/highlighter.vue'

export default {
  name: 'Portfolio',
  components: {
    Paragraph,
    Separator,
    Highlighter,
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
        'Scrum',
        'Kanban',
        'Scrum ceremonies',
        'Problem solver',
        'Feedback promoter',
        'Coaching',
        'Knowledge sessions promoter',
      ],
      curiosityHighlightsList: ['Jenkins', 'Docker', 'Python', 'C#', 'Java'],
      extraHighlightsList: ['music', 'art', 'concerts', 'boulder'],
    }
  },
}
</script>