<template>
  <div>
    <p>{{ status }}</p>
    <p>{{ totalCount }}</p>

    <div>
      <router-link
        v-for="index in pagination"
        :to="`/partners/search?page=${index}`"
        :key="index"
        tag="p"
        class="nav-bar"
      >
        <a class="nav-pill">{{ index }}</a>
      </router-link>
    </div>

    <div class="display">
      <partners-card
        v-for="result in results"
        :data="result"
        :key="result.id"
      />
    </div>
  </div>
</template>
<script>
import PartnersCard from '@/components/partners-card'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  data() {
    return {
      pagination: []
    }
  },
  created() {
    /*
      search => query.page undefined => NaN
      search?page= => query.page: "" => NaN
      search?page=0 => query.page: "0" => 0
    */
    let page = parseInt(this.$route.query.page) || 1
    page = page > -1 ? page : 1

    console.log('page', page)
    // this.getResults({
    //   offset: (page - 1) * 20
    // }).then(() => {
    const totalCount = 120
    const limit = 20
    // const set = 5
    const pageRange = 2

    const totalPages = Math.ceil(totalCount / limit)

    let rangeStart = page - pageRange
    let rangeEnd = page + pageRange

    if (rangeEnd > totalPages) {
      rangeEnd = totalPages
      rangeStart = totalPages - pageRange * 2
      rangeStart = rangeStart < 1 ? 1 : rangeStart
    }

    if (rangeStart <= 1) {
      rangeStart = 1
      rangeEnd = Math.min(pageRange * 2 + 1, totalPages)
    }

    const nav = []
    for (let i = rangeStart; i <= rangeEnd; i++) {
      nav.push(i)
    }
    this.pagination = [...nav]

    console.log('totalPages', totalPages)
    console.log('rangeStart', rangeStart)
    console.log('rangeEnd', rangeEnd)
    console.log('nav', nav)
    // })
  },
  components: {
    PartnersCard
  },
  methods: {
    ...mapActions('kiva', ['getResults'])
  },
  computed: {
    ...mapGetters('kiva', ['results', 'status', 'totalCount'])
  }
}
</script>
<style>
.display {
  display: flex;
  flex-wrap: wrap;
  margin: auto 150px;
}
.nav-pill {
  display: inline-block;
  border: 1px solid;
  width: 50px;
  margin: 5px;
  padding: 5px;
}
.nav-bar {
  display: inline-block;
}
</style>
