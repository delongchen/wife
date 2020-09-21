<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import { IDDB } from "@/core/db/indexeddb";

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
    ...mapActions('textService', ['GetTexts']),
    ...mapMutations('textService', ['SET_NODE', 'SET_NODE_PROPS']),
    textsWrapper(node) {
      const {title, id} = node
      const child = node.children

      if (Array.isArray(child)) {
        return(
          <a-sub-menu
            vOn:titleClick={this.titleClickHandler}
            key={id}>
            <span slot="title">
              <a-icon type="qq"/>
              <span>{title}</span>
            </span>
            {...child.map(item => this.textsWrapper(item))}
          </a-sub-menu>
        )
      } else {
        return(<a-menu-item key={id}>{title}</a-menu-item>)
      }
    },
    setNode(key) {
      return new Promise((resolve, reject) => {
        this.SET_NODE(key)
        if (this.NODE.children === undefined)
          this.GetTexts(key).then(value => {
            const newChildren = value.children
            this.SET_NODE_PROPS(node => {
              node.children = newChildren === undefined ? null : newChildren
            })
          }).catch(reason => reject(reason))
      })
    },
    clickHandler({key}) {
      this.setNode(key)
    },
    titleClickHandler({key}) {
      this.setNode(key)
    },
    openChangeHandler(keys) {
      this.openKeys = keys
    }
  },
  computed: {
    ...mapGetters('textService', ['TEXTS', 'TEXT_BY_POSITION', 'NODE'])
  },
  beforeMount() {
    IDDB.add(nodes)
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
        {...this.TEXTS.children.map(item => this.textsWrapper(item))}
      </a-menu>
    )
  }
}
</script>

<style scoped>

</style>
