"use strict";(self.webpackChunkxamarin_community_guide=self.webpackChunkxamarin_community_guide||[]).push([[924],{537:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var c=a(7294),l=a(9696),s=a(1217),n=a(5742),r=a(910);function o({doc:e}){return c.createElement("article",{className:"margin-vert--lg"},c.createElement(s.Z,{to:e.permalink},c.createElement("h2",null,e.title)),e.description&&c.createElement("p",null,e.description))}function g({tag:e}){const t=function(){const{selectMessage:e}=(0,n.c2)();return t=>e(t,(0,r.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:t}))}(),a=(0,r.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:t(e.docs.length),tagName:e.name});return c.createElement(l.Z,{title:a,wrapperClassName:n.kM.wrapper.docsPages,pageClassName:n.kM.page.docsTagDocListPage,searchMetadatas:{tag:"doc_tag_doc_list"}},c.createElement("div",{className:"container margin-vert--lg"},c.createElement("div",{className:"row"},c.createElement("main",{className:"col col--8 col--offset-2"},c.createElement("header",{className:"margin-bottom--xl"},c.createElement("h1",null,a),c.createElement(s.Z,{href:e.allTagsPath},c.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),c.createElement("section",{className:"margin-vert--lg"},e.docs.map((e=>c.createElement(o,{key:e.id,doc:e}))))))))}}}]);