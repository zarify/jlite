(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3242,5866],{75866:(e,t,n)=>{"use strict";n.r(t),n.d(t,{STATUSBAR_PLUGIN_ID:()=>b,kernelStatus:()=>p,lineColItem:()=>I,runningSessionsItem:()=>S,default:()=>k});var a=n(88647),s=n(19573),o=n(48202),i=n(40100),r=n(94257),l=n(80198),c=n(34016),d=n(44588),u=n(17179),m=n(10189),g=n(81443);const b="@jupyterlab/statusbar-extension:plugin",h={id:b,requires:[u.ITranslator],provides:c.IStatusBar,autoStart:!0,activate:(e,t,n,a,s,o)=>{const i=t.load("jupyterlab"),r=new c.StatusBar;r.id="jp-main-statusbar",e.shell.add(r,"bottom"),n&&n.layoutModified.connect((()=>{r.update()}));const l=i.__("Main Area"),d="statusbar:toggle";if(e.commands.addCommand(d,{label:i.__("Show Status Bar"),execute:e=>{r.setHidden(r.isVisible),a&&a.set(b,"visible",r.isVisible)},isToggled:()=>r.isVisible}),o&&o.addItem({command:d,category:l}),s&&s.viewMenu.addGroup([{command:d}],1),a){const t=a.load(b),n=e=>{const t=e.get("visible").composite;r.setHidden(!t)};Promise.all([t,e.restored]).then((([e])=>{n(e),e.changed.connect((e=>{n(e)}))})).catch((e=>{console.error(e.message)}))}return r},optional:[a.ILabShell,d.ISettingRegistry,r.IMainMenu,s.ICommandPalette]},p={id:"@jupyterlab/statusbar-extension:kernel-status",autoStart:!0,requires:[c.IStatusBar,l.INotebookTracker,o.IConsoleTracker,a.ILabShell,u.ITranslator],optional:[s.ISessionContextDialogs],activate:(e,t,n,a,o,i,r)=>{let l=null;const d=new c.KernelStatus({onClick:async()=>{l&&await(r||s.sessionContextDialogs).selectKernel(l,i)}},i),u=e=>{d.model.activityName=e.label};o.currentChanged.connect(((e,t)=>{const{oldValue:s,newValue:o}=t;s&&s.title.changed.disconnect(u),o&&o.title.changed.connect(u),l=o&&a.has(o)||o&&n.has(o)?o.sessionContext:null,d.model.sessionContext=l})),t.registerStatusItem("@jupyterlab/statusbar-extension:kernel-status",{item:d,align:"left",rank:1,isActive:()=>{const e=o.currentWidget;return!!e&&(n.has(e)||a.has(e))}})}},I={id:"@jupyterlab/statusbar-extension:line-col-status",autoStart:!0,requires:[c.IStatusBar,l.INotebookTracker,i.IEditorTracker,o.IConsoleTracker,a.ILabShell,u.ITranslator],activate:(e,t,n,a,s,o,i)=>{const r=new c.LineCol(i),l=(e,t)=>{r.model.editor=t&&t.editor},d=(e,t)=>{r.model.editor=t&&t.editor};o.currentChanged.connect(((e,t)=>{const{oldValue:o,newValue:i}=t;if(o&&s.has(o)?o.console.promptCellCreated.disconnect(d):o&&n.has(o)&&o.content.activeCellChanged.disconnect(l),i&&s.has(i)){i.console.promptCellCreated.connect(d);const e=i.console.promptCell;r.model.editor=e&&e.editor}else if(i&&n.has(i)){i.content.activeCellChanged.connect(l);const e=i.content.activeCell;r.model.editor=e&&e.editor}else i&&a.has(i)?r.model.editor=i.content.editor:r.model.editor=null})),t.registerStatusItem("@jupyterlab/statusbar-extension:line-col-status",{item:r,align:"right",rank:2,isActive:()=>{const e=o.currentWidget;return!!e&&(n.has(e)||a.has(e)||s.has(e))}})}},S={id:"@jupyterlab/statusbar-extension:running-sessions-status",autoStart:!0,requires:[c.IStatusBar,u.ITranslator],activate:(e,t,n)=>{const a=new c.RunningSessions({onClick:()=>e.shell.activateById("jp-running-sessions"),serviceManager:e.serviceManager,translator:n});t.registerStatusItem("@jupyterlab/statusbar-extension:running-sessions-status",{item:a,align:"left",rank:0})}},C={id:"@jupyterlab/statusbar-extension:mode-switch",requires:[a.ILabShell,u.ITranslator,c.IStatusBar],activate:(e,t,n,a)=>{const s=n.load("jupyterlab"),o=new m.Switch;o.id="jp-single-document-mode",o.valueChanged.connect(((e,n)=>{t.mode=n.newValue?"single-document":"multiple-document"})),t.modeChanged.connect(((e,t)=>{o.value="single-document"===t})),o.value="single-document"===t.mode;const i=()=>{const t=e.commands.keyBindings.find((e=>"application:toggle-mode"===e.command));if(t){const e=g.CommandRegistry.formatKeystroke(t.keys.join(" "));o.caption=s.__("Simple Interface (%1)",e)}else o.caption=s.__("Simple Interface")};i(),e.commands.keyBindingChanged.connect((()=>{i()})),o.label=s.__("Simple"),a.registerStatusItem("@jupyterlab/statusbar-extension:mode-switch",{item:o,align:"left",isActive:()=>!0,rank:-1})},autoStart:!0},k=[h,I,p,S,C]}}]);
//# sourceMappingURL=3242.52ffe5d33754a753478b.js.map