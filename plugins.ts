
import date from "lume/plugins/date.ts";
import decap_cms from "lume/plugins/decap_cms.ts";
import favicon from "lume/plugins/favicon.ts";
import inline from "lume/plugins/inline.ts";
import metas from "lume/plugins/metas.ts";
import og_images from "lume/plugins/og_images.ts";
import postcss from "lume/plugins/postcss.ts";
import relations from "lume/plugins/relations.ts";
import robots from "lume/plugins/robots.ts";
import sass from "lume/plugins/sass.ts";
import svgo from "lume/plugins/svgo.ts";

import { nl } from "npm:date-fns/locale";

export default function(options: Options = {}) {
    return (site: Site) => {
        site
            .use(date({
                formats: {
                    "READABLE_FORMAT": "PPP",
                },
                locales: { nl, },
            }))
            //.use(decap_cms())
            //.use(favicon())
            .use(inline())
            .use(metas())
            .use(og_images())
            .use(postcss())
            .use(relations())
            .use(robots())
            .use(sass())
            .use(svgo())

            .copy("js")
    }
}