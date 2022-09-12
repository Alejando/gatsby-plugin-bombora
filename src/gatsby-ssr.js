const React = require("react")

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === 'production' && pluginOptions.bomboraEid && pluginOptions.bomboraCid) {
    setHeadComponents([
      <script
        key={`gatsby-plugin-bombora`}
        dangerouslySetInnerHTML={{
          __html: `(function (w, d, t) {
                  _ml = w._ml || {};
                  _ml.eid = '${pluginOptions.bomboraEid}';
                  _ml.cid = '${pluginOptions.bomboraCid}';
                  var s, cd, tag; s = d.getElementsByTagName(t)[0]; cd = new Date();
                  tag = d.createElement(t); tag.async = 1;
                  tag.src = 'https://ml314.com/tag.aspx?' + cd.getDate() + cd.getMonth();
                  s.parentNode.insertBefore(tag, s);
              })(window, document, 'script');`,
        }}
      />
    ]);
  }
};
