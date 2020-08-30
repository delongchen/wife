<script>
import {mapGetters} from 'vuex'

export default {
  name: "TextList",
  data() {
    return {
      openKeys: []
    }
  },
  props: {
    collapsed: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    textsWrapper(node, key) {
      const {title} = node
      const child = node.children
      if (Array.isArray(child)) {
        const items = []
        for (let i = 0; i < child.length; i++) {
          items.push(this.textsWrapper(child[i], key + i))
        }
        return(
          <a-sub-menu
            vOn:titleClick={this.titleClickHandler}
            key={key}>
            <span slot="title">
              <a-icon type="qq"/>
              <span>{title}</span>
            </span>
            {...items}
          </a-sub-menu>
        )
      } else {
        return(<a-menu-item key={key}>{title}</a-menu-item>)
      }
    },
    setNode(key) {
      this.$store.commit('textService/SET_NODE', key)
    },
    clickHandler({key}) {
      this.setNode(key)
    },
    titleClickHandler({key}) {
      this.setNode(key)
    },
    openChangeHandler(keys) {
      this.openKeys = keys
      console.log(keys)
    },
    showItem(o) {console.log(o)}
  },
  computed: {
    ...mapGetters('textService', ['TEXTS', 'TEXT_BY_POSITION'])
  },
  render() {
    return(
      <a-menu
        mode="inline"
        theme="dark"
        inlineCollapsed={this.collapsed}
        openKeys={this.openKeys}
        vOn:click={this.clickHandler}
        vOn:openChange={this.openChangeHandler}
      >
        {...this.TEXTS.children.map((item, key) => this.textsWrapper(item, '' + key))}
      </a-menu>
    )
  }
}
</script>

<style scoped>

</style>
