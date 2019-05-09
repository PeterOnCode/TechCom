<template>
  <div class="techcom-menu" v-html="menuHtml"></div>
</template>

<script>
export default {
  name: "techcom-menu",

  props: ["pages"],

  data: function() {
    return {
      regularPaths: [],
      menuHtml: ""
    };
  },
  /*
    Methods
  */
  methods: {
    makeUl: function(hierarchy, classname) {
      var dirs = Object.keys(hierarchy);
      var ul = "<ul";

      if (classname) {
        ul += ' class="' + classname + '"';
      }
      ul += ">\n";

      let that = this;
      dirs.forEach(dir => {
        if (dir === "$page") {
          return;
        }
        let page = hierarchy[dir].$page;
        if (typeof page !== "undefined") {
          const text = page.title ? page.title : "Haha";
          ul += `<li class="file"><a href="${page.path}">${text}</a>\n`;
          ul += that.makeUl(hierarchy[dir]);
          ul += "</li>\n";
        }
      });

      ul += "</ul>\n";

      return ul;
    }
  },
  /*
   Lifecycle Hooks
  */
  created() {
    this.pages = this.pages.sort((p1, p2) =>
      p1.regularPath.localeCompare(p2.regularPath)
    );

    const h = this.pages.reduce((accumulator, currentValue) => {
      let acc = accumulator;
      currentValue.regularPath.split("/").forEach(folder => {
        if (folder.length === 0) {
          return;
        }

        if (!acc[folder]) {
          acc[folder] = {};
        }
        acc = acc[folder];
      });
      acc.$page = currentValue;
      return accumulator;
    }, {});

    //
    const ul = this.makeUl(h, "techcom menu");
    this.menuHtml = ul;
  }
};
</script>

<style lang="stylus">
.techcom .menu {
  a {
    color: red;

    :hover {
      background-color: yellow;
    }
  }
}
</style>
