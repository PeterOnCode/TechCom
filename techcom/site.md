
title: {{$site.title}}
<ol>
  <li v-for="udata in $site.pages">
    Id : {{ udata.title }} Name: {{ udata.name }}
  </li>
</ol>
