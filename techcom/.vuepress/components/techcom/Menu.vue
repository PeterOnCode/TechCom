<template>
  <div class="techcom-menu">
    <ul>
      <li v-for="regPath in regularPaths">
        <a v-bind:href="regPath">{{regPath}}</a>
      </li>
      <ul>
        <li>documentation</li>
        <ul>
          <li>programming</li>
        </ul>
      </ul>
    </ul>
    <!-- {{pages}} -->
  </div>
</template>

<script>
// import SidebarLinks from "@theme/components/SidebarLinks.vue";
// import NavLinks from "@theme/components/NavLinks.vue";

export default {
  name: "techcom-menu",

  // components: { SidebarLinks, NavLinks },

  props: ["pages"],

  data: function() {
    return {
      regularPaths: []
    };
  },

  /*
    Methods
  */
  methods: {
    makeUl: function(hierarchy, classname) {
      console.log(classname);

      var dirs = Object.keys(hierarchy);
      var ul = "<ul";
      if (classname) {
        ul += ' class="' + classname + '"';
      }
      ul += ">\n";
      dirs.forEach(function(dir) {
        var path = hierarchy[dir].path;
        if (path) {
          // file
          ul += '<li class="file" data-url="' + path + '">' + dir + "</li>\n";
        } else {
          ul += '<li class="folder">' + dir + "\n";
          ul += makeUl(hierarchy[dir]);
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
    // console.log("created()");
    this.regularPaths = this.pages.map(page => page.regularPath).sort();

    //
    const hierarchy = this.regularPaths.reduce((hier, path) => {
      let x = hier;
      path.split("/").forEach(function(item) {
        if (!x[item]) {
          x[item] = {};
        }
        x = x[item];
      });
      x.path = path;
      return hier;
    }, {});

    this.makeUl(hierarchy, "base-UL");

    // console.log(`length: ${this.regularPaths.length}`);
  }
};
</script>

<style lang="stylus">
.techcom-menu {
  a {
    color: red;

    :hover {
      background-color: yellow;
    }
  }
}
</style>
