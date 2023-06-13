import React, { useEffect } from 'react';
import grapesjs from 'grapesjs';
import GrapesjsMJMJ from "grapesjs-mjml"
import 'grapesjs/dist/css/grapes.min.css';

const App: React.FC = () => {

  useEffect(() => {

    const editor = grapesjs.init({
      container: "#gjs",
      styleManager: {
      },

      blockManager: {
        appendTo: "#block",
        blocks: [
          {
            id: 'mjml-template',
            label: 'MJML Template',
            content: `
                  <mjml>
                    <mj-body>
                      <mj-section>
                        <mj-column>
                          <mj-text>Hello, GrapeJS!</mj-text>
                        </mj-column>
                      </mj-section>
                    </mj-body>
                  </mjml>
                `,
          },
        ],
      },

      plugins: [],

    })

    console.log(editor);

    editor.StyleManager.addProperty('decorations', {
      label: 'Minimum height',
      property: 'min-height',
      type: 'select',
      default: '100px',
      options: [
        { id: '100px', label: '100' },
        { id: '200px', label: '200' },
      ],
    }, { at: 0 });

    editor.StyleManager.addProperty("decorations", {
      type: 'composite',
      property: 'border-left',
      label: 'Border Left',
      // Additional props
      properties: [
        { type: 'number', units: ['px'], default: '0', property: 'border-width' },
        {
          type: 'select', default: 'solid', property: 'border-style', options: [
            { id: 'solid', label: 'Solid' },
            { id: 'dashed', label: 'Dashed' },
            { id: 'dotted', label: 'Dotted' },
          ]
        },
        { type: 'color', default: '#000000', property: 'border-color' },
      ]
    }, { at: 0 });

    editor.StyleManager.addProperty("decorations", {
      type: 'composite',
      property: 'border-right',
      label: 'Border Right',
      // Additional props
      properties: [
        { type: 'number', units: ['px'], default: '0', property: 'border-width' },
        {
          type: 'select', default: 'solid', property: 'border-style', options: [
            { id: 'solid', label: 'Solid' },
            { id: 'dashed', label: 'Dashed' },
            { id: 'dotted', label: 'Dotted' },
          ]
        },
        { type: 'color', default: '#000000', property: 'border-color' },
      ]
    }, { at: 1 });
    // const editor = grapesjs.init({
    //   container: editorRef.current!,
    //   fromElement: true,
    //   // storageManager: {
    //   //   type: 'local',
    //   //   autosave: false, // Disable autosave for simplicity
    //   // },

    //   blockManager: {
    //     appendTo: editorRef.current!,
    //     blocks: [
    //       {
    //         id: 'mjml-template',
    //         label: 'MJML Template',
    //         content: `
    //           <mjml>
    //             <mj-body>
    //               <mj-section>
    //                 <mj-column>
    //                   <mj-text>Hello, GrapeJS!</mj-text>
    //                 </mj-column>
    //               </mj-section>
    //             </mj-body>
    //           </mjml>
    //         `,
    //       },
    //     ],
    //   },

    //   plugins: ['grapesjs-mjml'],
    //   pluginsOpts: {
    //     'grapesjs-mjml': {
    //       /* MJML-specific plugin options, if needed */
    //     },
    //   },

    // });

    // return () => {
    //   editor.destroy();
    // };
  }, []);

  return <div style={{ display: "flex", gap: "10px" }}>
    <div id="gjs" >
      <div style={{ padding: "25px" }}>Custom Style Type</div>
      <div style={{ fontSize: "50px" }}>Value 50</div>
    </div>
    <div id="block"></div>
  </div>
};


export default App;
