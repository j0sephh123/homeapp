<template>
<div class="section border column is-8 is-offset-2">

  <div class="field">
    <label class="label">Name</label>
    <div class="control">
      <input v-model="name" class="input" type="text" placeholder="Text input">
    </div>
  </div> <!-- book name -->

  <div class="field">
    <label class="label">Author</label>
    <div class="control">
      <input v-model="author" class="input" type="text" placeholder="Text input">
    </div>
  </div> <!-- author -->

  <div class="field">
    <label class="label">Reading Status</label>
    <div class="control">
      <div class="select">
        <select v-model="readingStatus">
          <option>toread</option>
          <option>reading</option>
          <option>read</option>
          <option>failed</option>
        </select>
      </div>
    </div>
  </div> <!-- reading status -->

  <div class="field">
    <label class="label">Thoughts</label>
    <div class="control">
      <textarea v-model="thoughts" class="textarea" placeholder="Textarea"></textarea>
    </div>
  </div> <!-- thoughts -->

  <div class="field is-grouped is-grouped-right">
    <div class="control">
      <button 
        @click="$store.dispatch('books/create', {
          name, author, readingStatus, thoughts
        })"
        class="button is-link">Submit</button>
    </div>
  </div> <!-- submit -->

</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      name: '',
      author: '',
      readingStatus: 'toread',
      thoughts: '',
    }
  },
  methods: {
    ...mapActions({
      createNote: 'notes/createNote',
    })
  },
  computed: {
    ...mapGetters({
      
    })
  },
  async mounted(){
    
  },
  watch: {
    
  }
}
</script>
