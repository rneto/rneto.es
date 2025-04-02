(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{472:function(e,a,t){"use strict";t.r(a);var s=t(6),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"usar-github-actions-para-automatizar-la-generacion-y-despliegue-de-un-blog-estatico-creado-con-vuepress-en-github-pages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usar-github-actions-para-automatizar-la-generacion-y-despliegue-de-un-blog-estatico-creado-con-vuepress-en-github-pages"}},[e._v("#")]),e._v(" Usar GitHub Actions para automatizar la generación y despliegue de un blog estático creado con VuePress en GitHub Pages")]),e._v(" "),t("social-share",{staticClass:"social-share--header"}),e._v(" "),t("p",[e._v("Tras unos meses con "),t("RouterLink",{attrs:{to:"/blog/crear-blog-estatico-vuepress/"}},[e._v("mi blog creado con VuePress")]),e._v(", he dedicido automatizar la generación y despliegue en GitHub Pages de los nuevos artículos como este.")],1),e._v(" "),t("p",[e._v("Para ello me he basado en una acción generada en GitHub explícitamente para dicho fin llamada "),t("a",{attrs:{href:"https://github.com/marketplace/actions/vuepress-deploy",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vuepress deploy"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"uso"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uso"}},[e._v("#")]),e._v(" Uso")]),e._v(" "),t("p",[e._v("A continuación seguiremos los pasos indicados en dicha acción a los que he añadido una serie de apuntes de mi cosecha.")]),e._v(" "),t("h3",{attrs:{id:"paso-1-crear-el-fichero-de-la-accion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#paso-1-crear-el-fichero-de-la-accion"}},[e._v("#")]),e._v(" Paso 1. Crear el fichero de la acción")]),e._v(" "),t("p",[e._v("Debemos crear el fichero "),t("em",[e._v("vuepress-deploy.yml")]),e._v(" en la carpeta "),t("em",[e._v(".github/workflows")]),e._v(" del directorio ráiz de nuestro repositorio de origen, es decir, en el que tenemos el código fuente de nuestro blog creado con VuePress. El contenido del fichero debe ser el siguiente:")]),e._v(" "),t("div",{staticClass:"language-yml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Build and Deploy\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("push"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("jobs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("build-and-deploy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("runs-on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ubuntu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("latest\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("steps")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Checkout\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" actions/checkout@master\n\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" vuepress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("deploy\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" jenkey2011/vuepress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("deploy@master\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("env")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("ACCESS_TOKEN")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" secrets.ACCESS_TOKEN "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("TARGET_REPO")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" tu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("usuario"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("github/tu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("repositorio"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("destino"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("blog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("vuepress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("compilado\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("TARGET_BRANCH")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" master\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("BUILD_SCRIPT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" yarn "),t("span",{pre:!0,attrs:{class:"token important"}},[e._v("&&")]),e._v(" yarn build\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("BUILD_DIR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" blog/.vuepress/dist/\n")])])]),t("p",[e._v("Si quieres ver cómo he configurado mi dominio personalizado "),t("em",[e._v("rneto.es")]),e._v(" de GitHub para el correcto despliegue y posterior funcionamiento de la web, échale un vistazo a mi fichero "),t("a",{attrs:{href:"https://github.com/rneto/rneto-es-blog-vuepress/blob/master/.github/workflows/vuepress-deploy.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress-deploy.yml"),t("OutboundLink")],1),e._v(", donde encontrarás la configuración CNAME necesaria.")]),e._v(" "),t("p",[e._v("En mi caso, he creado dichos directorios y fichero desde Visual Studio Code y cuando he intentado sincronizarlo con mi rama "),t("em",[e._v("master")]),e._v(" de origen la primera vez, me he encontrado con el siguiente error:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("remote rejected"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" master -"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" master "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("refusing to allow an OAuth App to create or update workflow "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v(".github/workflows/vuepress-deploy.yml"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(" without "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("workflow"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(" scope"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("p",[e._v("Al parecer es un "),t("a",{attrs:{href:"https://github.com/microsoft/vscode/issues/97396",target:"_blank",rel:"noopener noreferrer"}},[e._v("error identificado en Visual Studio Code"),t("OutboundLink")],1),e._v(" relacionado con las credenciales que han sido creadas con cierta antigüedad mediante Visual Studio Code como aplicación OAuth en Github.")]),e._v(" "),t("p",[e._v("Si a tí te llega a pasar lo mismo, puedes eliminar tus credenciales de GitHub de Windows para que Visual Studio Code te pida autenticarte nuevamente cuando vuelvas a conectarte a algún repositorio remoto de GitHub. Este manual de "),t("a",{attrs:{href:"https://cmatskas.com/how-to-update-your-git-credentials-on-windows/",target:"_blank",rel:"noopener noreferrer"}},[e._v("cómo eliminar tus credenciales de Git de Windows"),t("OutboundLink")],1),e._v(" puede servirte como referencia.")]),e._v(" "),t("h3",{attrs:{id:"paso-2-crear-un-token-personal-en-github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#paso-2-crear-un-token-personal-en-github"}},[e._v("#")]),e._v(" Paso 2. Crear un token personal en GitHub")]),e._v(" "),t("p",[e._v("Pulsa en el "),t("em",[e._v('icono de tu perfil de GitHub > Settings > Developer settings > Personal access tokens > Generate new token > Marca el check "repo"')]),e._v(". Entonces obtendrás un token que deberás copiar para usar en el siguiente paso.")]),e._v(" "),t("h3",{attrs:{id:"paso-3-crear-una-clave-secreta"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#paso-3-crear-una-clave-secreta"}},[e._v("#")]),e._v(" Paso 3: Crear una clave secreta")]),e._v(" "),t("p",[e._v("En tu repositorio  donde tengas tu código de VuePress, accede a "),t("em",[e._v("Settings > Secrets > Create a new secret")]),e._v(' y escribe ACCESS_TOKEN en la caja "Name" y pega el token personal en la caja "Value".')]),e._v(" "),t("p",[e._v("Y eso es todo. Con estos simples pasos, al subir un nuevo cambio al repositorio de origen, automáticamenet se generarán y publicarán en el repositorio de destino donde tengas tu blog VuePress publicado.")]),e._v(" "),t("hr"),e._v(" "),t("social-share",{staticClass:"social-share--footer"})],1)}),[],!1,null,null,null);a.default=n.exports}}]);