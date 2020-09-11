(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{466:function(t,a,e){"use strict";e.r(a);var s=e(1),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"how-to-load-data-packages-into-bigquery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-load-data-packages-into-bigquery"}},[t._v("#")]),t._v(" How to load Data Packages into BigQuery")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://colab.research.google.com/drive/1K5FqvkBvwruGOpyw_N8H7o9EKvZo7u7e",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open in Colab"}}),e("OutboundLink")],1)]),t._v(" "),e("hr"),t._v(" "),e("p",[e("strong",[t._v("Intermediate | Python | Datapackage")])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"learning-goals"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#learning-goals"}},[t._v("#")]),t._v(" Learning Goals")]),t._v(" "),e("ul",[e("li",[t._v("Learn how to take an existing data package and import it into BigQuery")]),t._v(" "),e("li",[t._v("This How-To assumes knowledge of how to create a [data package](TODO: add docs link) and how to use BigQuery")])]),t._v(" "),e("h2",{attrs:{id:"step-0-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-0-installation"}},[t._v("#")]),t._v(" Step 0: Installation")]),t._v(" "),e("p",[t._v("To load the data into BigQuery using Python, we will need the Table Schema BigQuery Storage library: "),e("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-bigquery-py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/tableschema-bigquery-py"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("You can install it as follows:")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("!pip install tableschema"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bigquery\n")])])]),e("h2",{attrs:{id:"step-1-setup-your-project-in-bigquery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1-setup-your-project-in-bigquery"}},[t._v("#")]),t._v(" Step 1: Setup your project in BigQuery")]),t._v(" "),e("p",[t._v("Loading into BigQuery requires some setup on Google’s infrastructure, but once that is completed, loading data can be just as frictionless. Here are the steps to follow:")]),t._v(" "),e("ul",[e("li",[t._v("Create a new project by going to this "),e("a",{attrs:{href:"https://console.cloud.google.com/iam-admin/projects",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Create credentials for a new service account and generate a key using this "),e("a",{attrs:{href:"https://console.developers.google.com/apis/credentials",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1),t._v(". Don’t forget to grant it access to your new project.")]),t._v(" "),e("li",[t._v("Download your new credentials as JSON and save as .credentials.json")]),t._v(" "),e("li",[t._v("Create an empty dataset for your project using this "),e("a",{attrs:{href:"https://bigquery.cloud.google.com/welcome/",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1),t._v(" (note, we named this “dataset” for this tutorial)")])]),t._v(" "),e("p",[e("em",[t._v("Note:")]),t._v(" if you get lost, please read the BigQuery docs here for more help with the previous steps.")]),t._v(" "),e("h2",{attrs:{id:"step-2-import-necessary-libraries-in-python"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-2-import-necessary-libraries-in-python"}},[t._v("#")]),t._v(" Step 2: Import necessary libraries in Python")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" io\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" json\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tableschema "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Table\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" apiclient"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("discovery "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" build\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" oauth2client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" GoogleCredentials\n")])])]),e("h2",{attrs:{id:"step-3-prepare-your-bigquery-credentials"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-3-prepare-your-bigquery-credentials"}},[t._v("#")]),t._v(" Step 3: Prepare your BigQuery credentials")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("os"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environ"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GOOGLE_APPLICATION_CREDENTIALS'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'credentials.json'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#where 'credentials.json' is your newly created credentials file")]),t._v("\ncredentials "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" GoogleCredentials"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_application_default"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nservice "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" build"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bigquery'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" credentials"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("credentials"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nproject "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("io"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'credentials.json'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" encoding"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UTF-8'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'project_id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("h2",{attrs:{id:"step-4-load-and-save-your-table-to-bigquery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-4-load-and-save-your-table-to-bigquery"}},[t._v("#")]),t._v(" Step 4: Load and save your table to BigQuery")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("table "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Table"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data.csv'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" schema"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'schema.json'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntable"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" storage"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bigquery'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" service"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("service"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" project"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("project"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dataset"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dataset'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# where 'dataset' is the name of your newly created empty dataset in BigQuery")]),t._v("\n\n")])])]),e("p",[e("em",[t._v("You can now inspect your dataset on BigQuery!")])]),t._v(" "),e("h2",{attrs:{id:"related-reference-documentation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#related-reference-documentation"}},[t._v("#")]),t._v(" Related Reference Documentation")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-bigquery-py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/tableschema-bigquery-py"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/datapackage-py"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);