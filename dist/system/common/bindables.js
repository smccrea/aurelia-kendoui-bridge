System.register([], function (_export, _context) {
  "use strict";

  var bindables;
  return {
    setters: [],
    execute: function () {
      _export("bindables", bindables = { "kendoAlert": ["messages", "name"], "kendoArcGauge": ["centerTemplate", "color", "colors", "gaugeArea", "name", "opacity", "renderAs", "scale", "theme", "transitions", "value"], "kendoAutoComplete": ["animation", "autoWidth", "clearButton", "dataSource", "dataTextField", "delay", "enable", "enforceMinLength", "filter", "fixedGroupTemplate", "footerTemplate", "groupTemplate", "headerTemplate", "height", "highlightFirst", "ignoreCase", "minLength", "name", "noDataTemplate", "placeholder", "popup", "separator", "suggest", "template", "value", "valuePrimitive", "virtual"], "kendoBarcode": ["background", "border", "checksum", "color", "height", "name", "padding", "renderAs", "text", "type", "value", "width"], "kendoButton": ["enable", "icon", "iconClass", "imageUrl", "name", "spriteCssClass"], "kendoButtonGroup": ["enable", "index", "items", "name", "selection"], "kendoCalendar": ["culture", "dates", "depth", "disableDates", "footer", "format", "max", "messages", "min", "month", "name", "selectDates", "selectable", "start", "value", "weekNumber"], "kendoChart": ["autoBind", "axisDefaults", "categoryAxis", "chartArea", "dataSource", "legend", "name", "panes", "pannable", "pdf", "persistSeriesVisibility", "plotArea", "renderAs", "series", "seriesColors", "seriesDefaults", "theme", "title", "tooltip", "transitions", "valueAxis", "xAxis", "yAxis", "zoomable"], "kendoChat": ["messages", "name", "user"], "kendoColorPalette": ["columns", "name", "palette", "tileSize", "value"], "kendoColorPicker": ["buttons", "clearButton", "columns", "messages", "name", "opacity", "palette", "preview", "tileSize", "toolIcon", "value"], "kendoComboBox": ["animation", "autoBind", "autoWidth", "cascadeFrom", "cascadeFromField", "clearButton", "dataSource", "dataTextField", "dataValueField", "delay", "enable", "enforceMinLength", "filter", "fixedGroupTemplate", "footerTemplate", "groupTemplate", "headerTemplate", "height", "highlightFirst", "ignoreCase", "index", "minLength", "name", "noDataTemplate", "placeholder", "popup", "suggest", "syncValueAndText", "template", "text", "value", "valuePrimitive", "virtual"], "kendoConfirm": ["content", "messages", "name", "title"], "kendoContextMenu": ["alignToAnchor", "animation", "appendTo", "closeOnClick", "copyAnchorStyles", "dataContentField", "dataImageUrlField", "dataSource", "dataSpriteCssClassField", "dataTextField", "dataUrlField", "direction", "filter", "hoverDelay", "name", "orientation", "popupCollision", "scrollable", "showOn", "target"], "kendoDateInput": ["format", "max", "messages", "min", "name", "value"], "kendoDatePicker": ["ARIATemplate", "animation", "culture", "dateInput", "dates", "depth", "disableDates", "footer", "format", "max", "min", "month", "name", "parseFormats", "start", "value", "weekNumber"], "kendoDateRangePicker": ["ARIATemplate", "culture", "dates", "depth", "disableDates", "footer", "format", "labels", "max", "messages", "min", "month", "name", "range", "start", "weekNumber"], "kendoDateTimePicker": ["ARIATemplate", "animation", "culture", "dateInput", "dates", "depth", "disableDates", "footer", "format", "interval", "max", "min", "month", "name", "parseFormats", "start", "timeFormat", "value", "weekNumber"], "kendoDiagram": ["autoBind", "connectionDefaults", "connections", "connectionsDataSource", "dataSource", "editable", "layout", "name", "pannable", "pdf", "selectable", "shapeDefaults", "shapes", "template", "theme", "zoom", "zoomMax", "zoomMin", "zoomRate"], "kendoDialog": ["actions", "animation", "buttonLayout", "closable", "content", "height", "maxHeight", "maxWidth", "messages", "minHeight", "minWidth", "modal", "name", "size", "title", "visible", "width"], "kendoDraggable": ["autoScroll", "axis", "container", "cursorOffset", "distance", "filter", "group", "hint", "holdToDrag", "ignore"], "kendoDropDownList": ["animation", "autoBind", "autoWidth", "cascadeFrom", "cascadeFromField", "dataSource", "dataTextField", "dataValueField", "delay", "enable", "enforceMinLength", "filter", "fixedGroupTemplate", "footerTemplate", "groupTemplate", "headerTemplate", "height", "ignoreCase", "index", "minLength", "name", "noDataTemplate", "optionLabel", "optionLabelTemplate", "popup", "template", "text", "value", "valuePrimitive", "valueTemplate", "virtual"], "kendoDropDownTree": ["animation", "autoBind", "autoClose", "autoWidth", "checkAll", "checkAllTemplate", "checkboxes", "clearButton", "dataImageUrlField", "dataSource", "dataSpriteCssClassField", "dataTextField", "dataUrlField", "dataValueField", "delay", "enable", "enforceMinLength", "filter", "footerTemplate", "headerTemplate", "height", "ignoreCase", "loadOnDemand", "messages", "minLength", "name", "noDataTemplate", "placeholder", "popup", "tagMode", "template", "text", "value", "valuePrimitive", "valueTemplate"], "kendoDropTarget": ["group"], "kendoDropTargetArea": ["filter", "group"], "kendoEditor": ["deserialization", "domain", "encoded", "fileBrowser", "imageBrowser", "immutables", "messages", "name", "pasteCleanup", "pdf", "placeholder", "resizable", "serialization", "stylesheets", "tools"], "kendoFilter": ["applyButton", "dataSource", "expression", "expressionPreview", "fields", "mainLogic", "messages", "name", "operators"], "kendoFilterMenu": ["dataSource", "extra", "field", "messages", "name", "operators"], "kendoFlatColorPicker": ["autoupdate", "buttons", "messages", "name", "opacity", "preview", "value"], "kendoGantt": ["assignments", "autoBind", "columnResizeHandleWidth", "columns", "currentTimeMarker", "dataSource", "date", "dependencies", "editable", "height", "hourSpan", "listWidth", "messages", "name", "navigatable", "pdf", "range", "resizable", "resources", "rowHeight", "selectable", "showWorkDays", "showWorkHours", "snap", "taskTemplate", "toolbar", "tooltip", "views", "workDayEnd", "workDayStart", "workWeekEnd", "workWeekStart"], "kendoGrid": ["allowCopy", "altRowTemplate", "autoBind", "columnMenu", "columnResizeHandleWidth", "columns", "dataSource", "detailTemplate", "editable", "excel", "filterable", "groupable", "height", "messages", "mobile", "name", "navigatable", "noRecords", "pageable", "pdf", "persistSelection", "reorderable", "resizable", "rowTemplate", "scrollable", "selectable", "sortable", "toolbar"], "kendoLinearGauge": ["gaugeArea", "name", "pointer", "renderAs", "scale", "theme", "transitions"], "kendoListBox": ["autoBind", "connectWith", "dataSource", "dataTextField", "dataValueField", "draggable", "dropSources", "messages", "name", "navigatable", "selectable", "template", "toolbar"], "kendoListView": ["altTemplate", "autoBind", "dataSource", "editTemplate", "height", "name", "navigatable", "scrollable", "selectable", "template"], "kendoMap": ["center", "controls", "layerDefaults", "layers", "markerDefaults", "markers", "maxZoom", "minSize", "minZoom", "name", "pannable", "wraparound", "zoom", "zoomable"], "kendoMaskedTextBox": ["clearPromptChar", "culture", "mask", "name", "promptChar", "rules", "unmaskOnPost", "value"], "kendoMediaPlayer": ["autoPlay", "autoRepeat", "forwardSeek", "fullScreen", "media", "messages", "mute", "name", "navigatable", "volume"], "kendoMenu": ["animation", "closeOnClick", "dataContentField", "dataImageUrlField", "dataSource", "dataSpriteCssClassField", "dataTextField", "dataUrlField", "direction", "hoverDelay", "name", "openOnClick", "orientation", "popupCollision", "scrollable"], "kendoMobileActionSheet": ["cancel", "name", "popup", "type"], "kendoMobileBackButton": ["name"], "kendoMobileButton": ["badge", "clickOn", "enable", "icon", "name"], "kendoMobileButtonGroup": ["enable", "index", "name", "selectOn"], "kendoMobileCollapsible": ["animation", "collapsed", "expandIcon", "iconPosition", "inset", "name"], "kendoMobileDetailButton": ["name"], "kendoMobileDrawer": ["container", "name", "position", "swipeToOpen", "swipeToOpenViews", "title", "views"], "kendoMobileLayout": ["id", "name", "platform"], "kendoMobileListView": ["appendOnRefresh", "autoBind", "dataSource", "endlessScroll", "filterable", "fixedHeaders", "headerTemplate", "loadMore", "messages", "name", "pullParameters", "pullToRefresh", "style", "template", "type", "virtualViewSize"], "kendoMobileLoader": ["name"], "kendoMobileModalView": ["height", "modal", "name", "width"], "kendoMobileNavBar": ["name"], "kendoMobilePane": ["collapsible", "initial", "layout", "loading", "name", "portraitWidth", "transition"], "kendoMobilePopOver": ["name", "pane", "popup"], "kendoMobileScrollView": ["autoBind", "bounceVelocityThreshold", "contentHeight", "dataSource", "duration", "emptyTemplate", "enablePager", "itemsPerPage", "name", "page", "pageSize", "template", "velocityThreshold"], "kendoMobileScroller": ["elastic", "messages", "name", "pullOffset", "pullToRefresh", "useNative", "visibleScrollHints", "zoom"], "kendoMobileSplitView": ["name", "style"], "kendoMobileSwitch": ["checked", "enable", "name", "offLabel", "onLabel"], "kendoMobileTabStrip": ["name", "selectedIndex"], "kendoMobileView": ["model", "name", "reload", "scroller", "stretch", "title", "useNativeScrolling", "zoom"], "kendoMultiColumnComboBox": ["animation", "autoBind", "autoWidth", "cascadeFrom", "cascadeFromField", "clearButton", "columns", "dataSource", "dataTextField", "dataValueField", "delay", "dropDownWidth", "enable", "enforceMinLength", "filter", "filterFields", "fixedGroupTemplate", "footerTemplate", "groupTemplate", "headerTemplate", "height", "highlightFirst", "ignoreCase", "index", "minLength", "name", "noDataTemplate", "placeholder", "popup", "suggest", "syncValueAndText", "template", "text", "value", "valuePrimitive", "virtual"], "kendoMultiSelect": ["animation", "autoBind", "autoClose", "autoWidth", "clearButton", "dataSource", "dataTextField", "dataValueField", "delay", "enable", "enforceMinLength", "filter", "fixedGroupTemplate", "footerTemplate", "groupTemplate", "headerTemplate", "height", "highlightFirst", "ignoreCase", "itemTemplate", "maxSelectedItems", "minLength", "name", "noDataTemplate", "placeholder", "popup", "tagMode", "tagTemplate", "value", "valuePrimitive", "virtual"], "kendoMultiViewCalendar": ["culture", "dates", "depth", "disableDates", "footer", "format", "max", "messages", "min", "month", "name", "range", "selectDates", "selectable", "showViewHeader", "start", "value", "views", "weekNumber"], "kendoNotification": ["allowHideAfter", "animation", "appendTo", "autoHideAfter", "button", "height", "hideOnClick", "name", "position", "stacking", "templates", "width"], "kendoNumericTextBox": ["culture", "decimals", "downArrowText", "factor", "format", "max", "min", "name", "placeholder", "restrictDecimals", "round", "spinners", "step", "upArrowText", "value"], "kendoPDFViewer": ["defaultPageSize", "dplProcessing", "height", "messages", "name", "page", "pdfjsProcessing", "toolbar", "view", "width"], "kendoPager": ["autoBind", "buttonCount", "dataSource", "info", "input", "linkTemplate", "messages", "name", "numeric", "pageSizes", "previousNext", "refresh", "responsive", "selectTemplate"], "kendoPanelBar": ["animation", "autoBind", "contentUrls", "dataImageUrlField", "dataSource", "dataSpriteCssClassField", "dataTextField", "dataUrlField", "expandMode", "loadOnDemand", "messages", "name", "template"], "kendoPivotConfigurator": ["dataSource", "filterable", "height", "messages", "name", "sortable"], "kendoPivotGrid": ["autoBind", "columnHeaderTemplate", "columnWidth", "dataCellTemplate", "dataSource", "excel", "filterable", "height", "kpiStatusTemplate", "kpiTrendTemplate", "messages", "name", "pdf", "reorderable", "rowHeaderTemplate", "sortable"], "kendoPopup": ["adjustSize", "anchor", "animation", "appendTo", "collision", "name", "origin", "position"], "kendoProgressBar": ["animation", "chunkCount", "enable", "max", "min", "name", "orientation", "reverse", "showStatus", "type", "value"], "kendoPrompt": ["messages", "name"], "kendoQRCode": ["background", "border", "color", "encoding", "errorCorrection", "name", "padding", "renderAs", "size", "value"], "kendoRadialGauge": ["gaugeArea", "name", "pointer", "renderAs", "scale", "theme", "transitions"], "kendoRangeSlider": ["largeStep", "leftDragHandleTitle", "max", "min", "name", "orientation", "rightDragHandleTitle", "selectionEnd", "selectionStart", "smallStep", "tickPlacement", "tooltip"], "kendoRating": ["enabled", "hoveredTemplate", "itemTemplate", "label", "max", "min", "name", "precision", "readonly", "selectValueOnFocus", "selectedTemplate", "selection", "tooltip"], "kendoResponsivePanel": ["autoClose", "breakpoint", "name", "orientation", "toggleButton"], "kendoScheduler": ["allDayEventTemplate", "allDaySlot", "autoBind", "currentTimeMarker", "dataSource", "date", "dateHeaderTemplate", "editable", "endTime", "eventTemplate", "footer", "group", "groupHeaderTemplate", "height", "majorTick", "majorTimeHeaderTemplate", "max", "messages", "min", "minorTickCount", "minorTimeHeaderTemplate", "mobile", "name", "pdf", "resources", "selectable", "showWorkHours", "snap", "startTime", "timezone", "toolbar", "views", "width", "workDayEnd", "workDayStart", "workWeekEnd", "workWeekStart"], "kendoScrollView": ["autoBind", "bounceVelocityThreshold", "contentHeight", "dataSource", "duration", "emptyTemplate", "enablePager", "name", "page", "template", "velocityThreshold"], "kendoSlider": ["decreaseButtonTitle", "dragHandleTitle", "increaseButtonTitle", "largeStep", "max", "min", "name", "orientation", "showButtons", "smallStep", "tickPlacement", "tooltip", "value"], "kendoSortable": ["autoScroll", "axis", "connectWith", "container", "cursor", "cursorOffset", "disabled", "filter", "handler", "hint", "holdToDrag", "ignore", "name", "placeholder"], "kendoSparkline": ["autoBind", "axisDefaults", "categoryAxis", "chartArea", "data", "dataSource", "name", "plotArea", "pointWidth", "renderAs", "series", "seriesColors", "seriesDefaults", "theme", "tooltip", "transitions", "type", "valueAxis"], "kendoSplitter": ["name", "orientation", "panes"], "kendoSpreadsheet": ["activeSheet", "columnWidth", "columns", "defaultCellStyle", "excel", "headerHeight", "headerWidth", "name", "pdf", "rowHeight", "rows", "sheets", "sheetsbar", "toolbar"], "kendoStockChart": ["autoBind", "axisDefaults", "categoryAxis", "chartArea", "dataSource", "dateField", "legend", "name", "navigator", "panes", "pdf", "persistSeriesVisibility", "plotArea", "renderAs", "series", "seriesColors", "seriesDefaults", "theme", "title", "tooltip", "transitions", "valueAxis"], "kendoSwitch": ["checked", "enabled", "messages", "name", "readonly", "width"], "kendoTabStrip": ["animation", "collapsible", "contentUrls", "dataContentField", "dataContentUrlField", "dataImageUrlField", "dataSource", "dataSpriteCssClass", "dataTextField", "dataUrlField", "name", "navigatable", "scrollable", "tabPosition", "value"], "kendoTimePicker": ["animation", "culture", "dateInput", "dates", "format", "interval", "max", "min", "name", "parseFormats", "value"], "kendoTimeline": ["alternatingMode", "collapsibleEvents", "dataActionsField", "dataDateField", "dataDescriptionField", "dataImagesField", "dataSource", "dataSubTitleField", "dataTitleField", "dateformat", "eventHeight", "eventTemplate", "eventWidth", "name", "orientation", "showDateLabels"], "kendoToolBar": ["items", "name", "resizable"], "kendoTooltip": ["animation", "autoHide", "callout", "content", "filter", "height", "iframe", "name", "position", "showAfter", "showOn", "width"], "kendoTouch": ["doubleTapTimeout", "enableSwipe", "filter", "maxDuration", "maxYDelta", "minHold", "minXDelta", "multiTouch", "name", "surface"], "kendoTreeList": ["autoBind", "columnMenu", "columns", "dataSource", "editable", "excel", "filterable", "height", "messages", "name", "navigatable", "pageable", "pdf", "reorderable", "resizable", "scrollable", "selectable", "sortable", "toolbar"], "kendoTreeMap": ["autoBind", "colorField", "colors", "dataSource", "name", "template", "textField", "theme", "type", "valueField"], "kendoTreeView": ["animation", "autoBind", "autoScroll", "checkboxes", "dataImageUrlField", "dataSource", "dataSpriteCssClassField", "dataTextField", "dataUrlField", "dragAndDrop", "loadOnDemand", "messages", "name", "template"], "kendoUpload": ["async", "directory", "directoryDrop", "dropZone", "enabled", "files", "localization", "multiple", "name", "showFileList", "template", "validation"], "kendoValidator": ["errorTemplate", "messages", "name", "rules", "validateOnBlur"], "kendoWindow": ["actions", "animation", "appendTo", "autoFocus", "content", "draggable", "height", "iframe", "maxHeight", "maxWidth", "minHeight", "minWidth", "modal", "name", "pinned", "position", "resizable", "scrollable", "size", "title", "visible", "width"], "GanttColumn": ["editable", "field", "format", "sortable", "title", "width"], "GridColumn": ["aggregates", "attributes", "columns", "command", "editable", "encoded", "field", "filterable", "footerAttributes", "footerTemplate", "format", "groupFooterTemplate", "groupHeaderColumnTemplate", "groupHeaderTemplate", "groupable", "headerAttributes", "headerTemplate", "hidden", "lockable", "locked", "media", "menu", "minResizableWidth", "minScreenWidth", "selectable", "sortable", "sticky", "stickable", "template", "title", "values", "width", "editor"], "GridColumnCommandItem": ["className", "click", "iconClass", "name", "template", "text", "visible"], "GridToolbarItem": ["iconClass", "name", "template", "text"], "ToolBarItem": ["attributes", "buttons", "click", "enable", "group", "hidden", "icon", "id", "imageUrl", "menuButtons", "overflow", "overflowTemplate", "primary", "selected", "showIcon", "showText", "spriteCssClass", "template", "text", "togglable", "toggle", "type", "url"], "ToolBarItemButton": ["attributes", "click", "enable", "group", "hidden", "icon", "id", "imageUrl", "selected", "showIcon", "showText", "spriteCssClass", "text", "togglable", "toggle", "url"], "TreeListColumn": ["attributes", "columns", "command", "editable", "encoded", "expandable", "field", "filterable", "footerTemplate", "format", "headerAttributes", "headerTemplate", "hidden", "lockable", "locked", "menu", "minScreenWidth", "sortable", "template", "title", "width", "editor"] });

      _export("bindables", bindables);
    }
  };
});