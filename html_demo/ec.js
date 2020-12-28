(function() {
    "use strict";
    function n(n, t, i, r, u, f, e) {
        function rr(n) {
            return moment(n).format("YYYY-MM-DD HH_mm_ss")
        }
        function dr() {
            var u, r, f;
            for (Highcharts.setOptions({
                global: {
                    useUTC: !1
                }
            }),
            u = document.cookie.split(";"),
            r = 0; r < u.length; r++)
                if (f = u[r].split("="),
                f[0] === "container_heightFix") {
                    o.heightFix = f[1];
                    console.dir(o.heightFix);
                    break
                }
            $(window).resize(function() {
                o.chartContent_alreadyShow = !1;
                fi && (hr = fi.element.innerHeight())
            });
            $("[name='rule-switch']").bootstrapSwitch({
                onText: "标准",
                offText: "自由",
                state: !0,
                size: "mini",
                labelText: "标尺",
                onSwitchChange: nf
            });
            $("[name='rule-switch']").bootstrapSwitch("state", !0);
            $(function() {
                function r(n) {
                    var t = $("#" + n)
                      , i = t.find(".hw-layer-wrap");
                    t.fadeIn();
                    i.css({
                        "margin-top": -i.outerHeight() / 2
                    })
                }
                function n() {
                    $(".hw-overlay").fadeOut()
                }
                $("#modal-chart-zoomin").on("show.bs.modal", function() {
                    var n = $(this)
                      , t = n.find(".modal-dialog");
                    n.css("display", "block");
                    t.css({
                        "margin-top": Math.max(0, ($(window).height() - t.height()) / 2)
                    })
                });
                $("#modal-chart-zoomin-ecgview").on("show.bs.modal", function() {
                    var n = $(this)
                      , t = n.find(".modal-dialog");
                    n.css("display", "block");
                    t.css({
                        "margin-top": Math.max(0, ($(window).height() - t.height()) / 4)
                    })
                });
                $(".hwLayer-cancel,.hwLayer-close").on("click", function() {
                    n()
                });
                $(".show-layer").on("click", function() {
                    o.type = "";
                    var n = $(this).data("show-layer");
                    r(n)
                });
                $(".hw-overlay").on("click", function(t) {
                    t.target === this && n();
                    o.heartShow = !1
                });
                if ($(document).keyup(function(t) {
                    t.keyCode === 27 && (n(),
                    o.heartShow = !1)
                }),
                $(document).keyup(function(n) {
                    if (a) {
                        var i = a.getGridParam("lastpage"), t;
                        n.keyCode === 39 && (it = a.getGridParam("page"),
                        it < i && (t = it + 1,
                        a.setGridParam({
                            page: t
                        }).trigger("reloadGrid")));
                        n.keyCode === 37 && (it = a.getGridParam("page"),
                        it > 1 && (t = it - 1,
                        a.setGridParam({
                            page: t
                        }).trigger("reloadGrid")))
                    }
                }),
                fi = $("#splitter1").kendoSplitter({
                    panes: [{
                        min: "260px",
                        size: "260px",
                        collapsible: !0,
                        scrollable: !1,
                        resizable: !1
                    }, {
                        collapsible: !1,
                        scrollable: !0
                    }],
                    resize: function() {
                        var n, t;
                        for ($("#sp1").css("overflow-y", "scroll"),
                        n = 0; n < st; n++)
                            t = $("#chart" + (n + 1)).highcharts(),
                            t && t.reflow()
                    }
                }).data("kendoSplitter"),
                !ft) {
                    ft = $("#specialEvent-table").DataTable({
                        searching: !1,
                        paging: !1,
                        info: !1,
                        processing: !0,
                        data: p,
                        language: {
                            zeroRecords: "Loading..."
                        },
                        order: [[2, "asc"]],
                        columns: [{
                            data: "name",
                            render: function(n, t, i) {
                                return n === "NO" ? "" : n === "正常" ? "<span style='width:80px;color:black' >" + n + "<\/span>" : n === "噪音" ? "<span style='width:80px;color:black' >" + n + "<\/span>" : i.editable ? i.count === 0 ? "<span style='width:80px;color:black'>" + n + "<\/span>" : i.isPoint ? "<a><div style='width:100px;color:#B0802B' ng-click='ecgViewer.gotoIllnessPage(\"" + i.name + "\")'>" + n + "<\/div><\/a>" : "<a><div style='width:100px;color:#B0802B' ng-click='ecgViewer.gotoArtialFibrillationPage()'>" + n + "<\/div><\/a>" : i.count === 0 ? "<span style='width:80px;color:black' >" + n + "<\/span>" : i.name == "排除" ? "<div style='width:80px;color:#B0802B' >" + n + "<\/div>" : i.isPoint ? "<a ng-click='ecgViewer.gotoIllnessPage(\"" + i.name + "\")'><div style='width:80px;color:#B0802B' >" + n + "<\/div><\/a>" : "<a ng-click='ecgViewer.gotoArtialFibrillationPage()'><div style='width:80px;color:#B0802B' >" + n + "<\/div><\/a>"
                            },
                            orderable: !1
                        }, {
                            data: "count",
                            render: function(n, t, i) {
                                if (i.name === "NO")
                                    return n;
                                if (i.name === "正常")
                                    return "<span class='badge badge-primary'>^_^<\/span>";
                                if (i.name === "噪音")
                                    return "<span class='badge badge-primary'>{{ecgViewer.noisePercentOfRecord}}%<\/span>";
                                var r = parseInt(n);
                                if (r > 0) {
                                    let n = "";
                                    return i.name !== "排除" && (n = "<a ng-click='ecgViewer.gotoIllnessPage(\"" + i.name + "\")' >"),
                                    i.isPoint || (n = "<a ng-click='ecgViewer.gotoArtialFibrillationPage()' >"),
                                    n + "<span class='badge badge-danger'>" + r + "<\/span><\/a><span class='event-nav'><i style='width:15px' class='btn btn-xs text-muted fa fa-fw fa-lg fa-arrow-circle-left' ng-click='ecgViewer.gotoPrevEventPage(\"" + i.name + '","' + i.isPoint + "\")'><\/i><i style='width:15px' class='btn btn-xs text-muted fa fa-fw fa-lg fa-arrow-circle-right' ng-click='ecgViewer.gotoNextEventPage(\"" + i.name + '","' + i.isPoint + "\")'><\/i><\/span>"
                                }
                                return "<span class='badge badge-plain' style='width:19px'>" + r + "<\/span>"
                            },
                            orderable: !1
                        }, {
                            data: "sort",
                            render: function(n) {
                                return "<span style='0px;display:none'>" + n + "<\/span>"
                            }
                        }],
                        createdRow: function(n) {
                            i(angular.element(n).contents())(t)
                        }
                    });
                    ft.on("mouseover", "tbody tr[role='row'] td", function(n) {
                        $(n.currentTarget).find(".event-nav").css("display", "inline")
                    }).on("mouseout", "tbody tr[role='row'] td", function(n) {
                        $(n.currentTarget).find(".event-nav").css("display", "none")
                    }).on("mouseover", "tfoot tr[role='row'] td", function(n) {
                        $(n.currentTarget).find(".event-nav").css("display", "inline")
                    }).on("mouseout", "tfoot tr[role='row'] td", function(n) {
                        $(n.currentTarget).find(".event-nav").css("display", "none")
                    })
                }
            });
            n.$on("iirSwitchChanged", vu);
            n.$on("rPeakSwitchChanged", yu);
            n.$on("chartRularChanged", pu);
            n.$on("RuleSwitchChanged", tf)
        }
        function gr(n) {
            wt = "";
            wt = n;
            console.log(wt);
            document.getElementById("showpartEcgData").click()
        }
        function nu() {
            document.getElementById("showNewIllNess").click()
        }
        function tu(n) {
            var t = document.getElementById(n).innerText;
            o.type = t;
            wt === "single" ? (o.partEcgValues.length === k + tt ? ti(o.activeAdvisory.record.startTime, o.rPeakindex, o.partEcgValues.concat(o.prePartEcgValues), o.type) : ti(o.activeAdvisory.record.startTime, o.rPeakindex, o.partEcgValues.concat(o.prePartEcgValues), "bad"),
            document.getElementById("partEcgData").click(),
            $(".hw-overlay").fadeOut()) : iu(wt)
        }
        function iu(n) {
            var t, i, r;
            console.log("download");
            for (i in p)
                if (n === p[i].name) {
                    t = p[i].data;
                    break
                }
            for (r in t) {
                var u = moment(t[r])
                  , f = Math.ceil(u.diff(o.activeAdvisory.record.startTime, "ms") / (h * l * 1e3))
                  , e = o.activeAdvisory.record.startTime.clone().add((f - 1) * h * l, "seconds")
                  , s = o.activeAdvisory.record.startTime.clone().add(f * h * l, "seconds");
                ru(e, s, u)
            }
        }
        function ru(n, t, i) {
            e.getEcgData(o.activeAdvisory.record.deviceFastNumber, o.activeAdvisory.record.startTime, n, t).then(function(t) {
                var s = $.extend(!0, [], t.ecg), y = t.sampling, a = i.diff(n, "ms", !0) / c, v = i.diff(o.activeAdvisory.record.startTime, "ms", !0) / c, r = a - k + 1, u = a + tt, f, e = y * h * l;
                r >= 0 && u <= e ? (f = s.slice(r, u + 1),
                ti(o.activeAdvisory.record.startTime, v, f, o.type),
                document.getElementById("partEcgData").click(),
                $(".hw-overlay").fadeOut()) : (r < 0 && (r = 0),
                u >= e && (u = e - 1),
                f = s.slice(r, u),
                ti(o.activeAdvisory.record.startTime, v, f, "bad"),
                document.getElementById("partEcgData").click(),
                $(".hw-overlay").fadeOut())
            })
        }
        function ur(n, t, i) {
            for (var r = t.slice(0), u = 0; u < r.length; u++)
                r[u] = [Math.round(r[u] * 100) / 100];
            var e = r.join("\r\n")
              , s = new Blob([e])
              , f = document.getElementById("ecgData");
            f.href = URL.createObjectURL(s);
            f.download = n.clone().format("YYYYMMDDHHmmss") + "-P" + i + "-完整数据.txt";
            o.isResearcher && (o.ecgShow = !0)
        }
        function ti(n, t, i, r) {
            for (var u in i)
                i[u] = Math.round(i[u] * 100) / 100;
            var e = i.join("\r\n")
              , o = new Blob([e])
              , f = document.getElementById("partEcgData");
            f.href = URL.createObjectURL(o);
            f.download = n.clone().format("YYYY-MM-DD-HH-mm-ss") + "-" + t + "-" + r + ".txt"
        }
        function uu(n, t, i, r, u) {
            var f = undefined;
            for (f in i)
                i[f] = Math.round(i[f] * 100) / 100;
            var s = i.join("\r\n")
              , h = new Blob([s])
              , e = document.getElementById("partEcgData");
            e.href = URL.createObjectURL(h);
            e.download = n.clone().format("YYYY-MM-DD-HH-mm-ss") + "-" + t + "-" + u + "-0.txt";
            for (f in r)
                r[f] = Math.round(r[f] * 100) / 100;
            var c = r.join("\r\n")
              , l = new Blob([c])
              , o = document.getElementById("partEcgData1");
            o.href = URL.createObjectURL(l);
            o.download = n.clone().format("YYYY-MM-DD-HH-mm-ss") + "-" + t + "-" + u + "-1.txt"
        }
        function fr(n, t, i) {
            for (var u, f, e = [], r = 0; r < t.length; r++)
                t[r] = moment(t[r]),
                e[r] = [t[r].diff(n, "ms") / c];
            for (u = e.slice(0),
            f = 0; f < u.length; f++)
                u[f] = [u[f]];
            var h = u.join("\r\n")
              , l = new Blob([h])
              , s = document.getElementById("rPeakData");
            s.href = URL.createObjectURL(l);
            s.download = n.clone().format("YYYYMMDDHHmmss") + "-P" + i + "-R.txt";
            o.isResearcher && (o.rPeakShow = !0)
        }
        function fu() {
            var r, f, t;
            $.fakeLoaderShow({
                timeToHide: 1e4,
                targetClass: "fakeLoader",
                filterContentId: "splitter1",
                bgColor: "rgba(20, 20, 20, 0.1)",
                spinner: "spinner4"
            });
            o.activeAdvisory = angular.copy(n.paramObj.advisory);
            o.isResearcher = n.paramObj.map.get("isResearcher");
            o.timeParameter = n.paramObj.map.get("time");
            o.timeParameter === "undefined" || o.timeParameter === "" || o.timeParameter === undefined || (o.jumpToTimeFlag = !0);
            (o.isResearcher === "undefined" || o.isResearcher === "false" || o.isResearcher === "") && (o.isResearcher = !1);
            o.isResearcher === "true" && (o.isResearcher = !0);
            yt = ai / 60;
            o.deviceLeads = parseInt(o.activeAdvisory.record.device.leads);
            c = 1e3 / v;
            let i = [];
            for (o.deviceLeads === 3 && (o.deviceLeads3 = !0,
            l = 1,
            st = 3,
            o.btnBefore = "前20秒",
            o.btnAfter = "后20秒",
            o.pageTime = 20,
            i = Array.of(1, 2, 3)),
            o.deviceLeads === 1 && (o.deviceLeads3 = !1,
            i = Array.of(1, 2, 3, 4)),
            setTimeout(()=>{
                i.forEach((n,t)=>{
                    let r = "chart" + (t + 1);
                    var i = {
                        id: r,
                        chartStartTime: null,
                        chartEndTime: null,
                        chart: undefined,
                        data: []
                    };
                    y[r] = i;
                    i.chart = bt(i)
                }
                )
            }
            , 20),
            o.activeAdvisory.record.startTime = moment(o.activeAdvisory.record.startTime),
            o.activeAdvisory.record.endTime = moment(o.activeAdvisory.record.endTime),
            r = [],
            f = (o.activeAdvisory.record.endTime.clone().milliseconds(0).seconds(0).minutes(0).hours(0).diff(o.activeAdvisory.record.startTime.clone().milliseconds(0).seconds(0).minutes(0).hours(0), "day") + 1) * 24 / lt,
            t = 0; t < f; t++)
                r.push({
                    page: t + 1
                });
            su().then(function() {
                for (var t = [], i = Math.ceil(o.activeAdvisory.record.lengthInSeconds / (h * l)), n = 0; n < i; n++)
                    t.push({
                        page: n + 1
                    });
                a = $("#pagerTable").jqGrid({
                    data: t,
                    datatype: "local",
                    rowNum: 1,
                    colModel: [{
                        name: "page"
                    }],
                    styleUI: "Bootstrap",
                    pager: "#chartPager",
                    width: 400,
                    loadComplete: function() {
                        u(function() {
                            if (a) {
                                var n = a.getGridParam("page");
                                it = n;
                                sr();
                                o.timeParameter && o.jumpToTimeFlag ? (console.dir(o.timeParameter),
                                o.jumpToTimeFlag = !1,
                                er(o.timeParameter)) : ii(n)
                            }
                        })
                    }
                })
            }, function() {});
            eu();
            kt(1)
        }
        function eu() {
            return e.getHeartRateInfo(o.activeAdvisory.record.device.seqNumber, o.activeAdvisory.record.startTime).then(function(t) {
                t && (o.hsStats = t,
                console.dir(o.hsStats),
                n.hsStats = t)
            }, function(n) {
                return console.dir(n),
                r.reject(n)
            })
        }
        function ii(n) {
            var t, i, u, n;
            o.activeAdvisory && (t = o.activeAdvisory.record.startTime.clone().add((n - 1) * h * l, "seconds"),
            i = o.activeAdvisory.record.startTime.clone().add(n * h * l, "seconds"),
            i.isAfter(o.activeAdvisory.record.endTime) && (i = o.activeAdvisory.record.endTime),
            o.ecgTimeSectionText = " " + t.format("YYYY/MM/DD"),
            o.cursorTimeText = t.format("HH:mm:ss.SSS"),
            o.ecgPageDesc = " (" + l + " x " + h + "秒)",
            r.all([e.getRPeakData(o.activeAdvisory.record.device.seqNumber, o.activeAdvisory.record.startTime, t, i), e.getNoiseData(o.activeAdvisory.record.device.seqNumber, o.activeAdvisory.record.startTime, t, i), e.getEcgData(o.activeAdvisory.record.device.seqNumber, o.activeAdvisory.record.startTime, t, i), e.getSpecialEventResult(o.activeAdvisory.record.device.seqNumber, o.activeAdvisory.record.startTime, t, i), of()]).then(function(r) {
                var f, u;
                if ($.fakeLoaderHide(),
                r[2].error)
                    swal({
                        type: "warning",
                        title: "提示",
                        text: r[2].error.message,
                        confirmButtonText: "确定"
                    });
                else {
                    s = r[0];
                    li = r[1];
                    rt = r[3].specialEvents;
                    ut = r[4];
                    console.log("sectionEvents", ut.length);
                    let a = r[2].ecgData
                      , e = r[2].sampling;
                    if (o.deviceLeads = r[2].leads,
                    v = e,
                    c = 1e3 / v,
                    o.deviceLeads === 3) {
                        o.btnBefore = "前20秒";
                        o.btnAfter = "后20秒";
                        o.deviceLeads3 = !0;
                        ht = $.extend(!0, [], a[0]);
                        for (let r = 0; r < 3; r++) {
                            let u = $.extend(!0, [], a[r]);
                            o.sliceName = Math.floor((n - 1) / yt) * v * ai * vt;
                            vi && (u = EcgBaselineFilter.Filtfilt(u));
                            ur(t, u, n);
                            let w = null
                              , b = null;
                            s[0] && (w = t.clone().utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ssZ"),
                            b = i.clone().utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ssZ"));
                            let d = bs.rangeValue(s, w, b);
                            fr(t, d, n);
                            for (let n in u)
                                u[n] = u[n] * 1e3;
                            let c = u;
                            while (c.length < h * e)
                                c.push(0);
                            let p = t.clone().add(0, "seconds")
                              , k = t.clone().add(h, "seconds");
                            for (let n = 0; n < c.length; n++)
                                c[n] = [p.clone().add(1e3 / v * n, "ms").toDate(), c[n]];
                            f = {
                                chartStartTime: p,
                                chartEndTime: k,
                                data: c
                            };
                            o.chartEcgDatas_Display[r] = f;
                            let l = "chart" + (r + 1);
                            y[l] = {
                                id: l,
                                chartStartTime: p,
                                chartEndTime: k,
                                chart: undefined,
                                data: c
                            };
                            y[l].chart = bt(y[l])
                        }
                    }
                    if (o.deviceLeads === 1) {
                        o.deviceLeads3 = !1;
                        ht = $.extend(!0, [], a[0]);
                        u = $.extend(!0, [], a[0]);
                        o.sliceName = Math.floor((n - 1) / yt) * v * ai * vt;
                        vi && (u = EcgBaselineFilter.Filtfilt(u));
                        ur(t, u, n);
                        let r = null
                          , f = null;
                        s[0] && (r = t.clone().utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ssZ"),
                        f = i.clone().utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ssZ"));
                        let c = bs.rangeValue(s, r, f);
                        fr(t, c, n);
                        for (let n in u)
                            u[n] = u[n] * 1e3;
                        for (let n = 0; n < l; n++) {
                            let i = u.slice(n * h * e, (n + 1) * h * e);
                            while (i.length < h * e)
                                i.push(0);
                            let f = t.clone().add(n * h, "seconds")
                              , o = t.clone().add((n + 1) * h, "seconds");
                            for (let n = 0; n < i.length; n++)
                                i[n] = [f.clone().add(1e3 / v * n, "ms").toDate(), i[n]];
                            let r = "chart" + (n + 1);
                            y[r] = {
                                id: r,
                                chartStartTime: f,
                                chartEndTime: o,
                                chart: undefined,
                                data: i
                            };
                            y[r].chart = bt(y[r])
                        }
                    }
                }
            }, function(n) {
                $.fakeLoaderHide();
                console.dir(n)
            }),
            u = t.diff(at, "minute") / 60,
            n = Math.ceil(u / lt),
            hi = t.clone(),
            console.log([u, n, o.heartRateChartPageNum].join(",")),
            n != o.heartRateChartPageNum ? kt(n) : (o.plotTime == null && (o.plotTime = t.clone().milliseconds(0).seconds(0)),
            ct != null && (o.plotTime = t.clone().milliseconds(0).seconds(0),
            yi(ct, t))))
        }
        function bt(n, i) {
            var f = n.chart, r;
            return f ? (f.series[0].setData(i),
            n.chart) : (r = n.id,
            Highcharts.chart(r, {
                chart: {
                    height: ((b - w) / 500 + 3) / (h * 5 + 4) * 100 + "%",
                    zoomType: "x",
                    marginTop: 30,
                    animation: !1,
                    events: {
                        load: function() {
                            y[r].chart = this
                        },
                        render: function() {
                            var n = y[r], i, u, p, b, l, w, d, h, a, f, e;
                            if (n.chartStartTime) {
                                if (o.chartContent_alreadyShow || ui(),
                                moment(o.chartContent_startTime).isBetween(n.chartStartTime, n.chartEndTime, null, "[]") && (o.chartContent_alreadyShow = !0,
                                ri(r, o.chartContent_s)),
                                o.isShowNormalBeat && pt && s) {
                                    i = n.chartStartTime.clone();
                                    u = n.chartEndTime.clone();
                                    s[0] && (i = n.chartStartTime.clone().utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ssZ"),
                                    u = n.chartEndTime.clone().utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ssZ"));
                                    p = bs.rangeValue(s, i, u);
                                    for (b in p)
                                        l = moment(p[b]),
                                        l.isBetween(n.chartStartTime, n.chartEndTime, null, "[]") && n.chart.xAxis[0].addPlotLine({
                                            value: l,
                                            color: tr,
                                            width: 1,
                                            id: "RPeakLine" + l.valueOf(),
                                            label: {
                                                text: "N",
                                                rotation: 0,
                                                align: "center",
                                                x: -2,
                                                y: -5,
                                                style: {
                                                    color: ir,
                                                    "font-weight": "bold"
                                                }
                                            },
                                            zIndex: 20
                                        })
                                }
                                if (pt && li[0]) {
                                    i = n.chartStartTime.clone();
                                    u = n.chartEndTime.clone();
                                    s[0] && (i = n.chartStartTime.clone().utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ssZ"),
                                    u = n.chartEndTime.clone().utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ssZ"));
                                    w = bs.rangeValue(li, i, u);
                                    for (d in w)
                                        h = moment(w[d]),
                                        h.isBetween(n.chartStartTime, n.chartEndTime, null, "[]") && (n.chart.xAxis[0].removePlotLine("RPeakLine" + h.valueOf()),
                                        n.chart.xAxis[0].removePlotBand("LoadingBand"),
                                        n.chart.xAxis[0].addPlotLine({
                                            value: h,
                                            color: br,
                                            width: 1,
                                            id: "NoiseLine" + h.valueOf(),
                                            label: {
                                                text: "Z",
                                                rotation: 0,
                                                align: "center",
                                                x: -2,
                                                y: -5,
                                                style: {
                                                    color: kr,
                                                    "font-weight": "bold"
                                                }
                                            },
                                            zIndex: 20
                                        }))
                                }
                                if (pt && rt)
                                    for (a in rt) {
                                        var g = rt[a].data
                                          , nt = rt[a].name
                                          , v = rt[a].abbr
                                          , t = moment(g);
                                        if (t.isBetween(n.chartStartTime, n.chartEndTime, null, "[]")) {
                                            if (n.chart.xAxis[0].removePlotLine("RPeakLine" + t.valueOf()),
                                            n.chart.xAxis[0].removePlotLine("NoiseLine" + t.valueOf()),
                                            f = null,
                                            e = null,
                                            nt === ni)
                                                f = gt,
                                                e = gt;
                                            else
                                                switch (v) {
                                                case "fake":
                                                    f = "gray";
                                                    e = "gray";
                                                    break;
                                                default:
                                                    f = pr;
                                                    e = wr
                                                }
                                            v.charCodeAt(0) >= 97 ? n.chart.xAxis[0].addPlotLine({
                                                value: t,
                                                color: f,
                                                width: 1,
                                                id: "SpecialEventLine" + t.valueOf(),
                                                label: {
                                                    text: v,
                                                    rotation: 0,
                                                    align: "center",
                                                    x: -2,
                                                    y: -20,
                                                    style: {
                                                        color: e,
                                                        fontWeight: "bold",
                                                        fontSize: "10px"
                                                    }
                                                },
                                                zIndex: 20
                                            }) : n.chart.xAxis[0].addPlotLine({
                                                value: t,
                                                color: f,
                                                width: 1,
                                                id: "SpecialEventLine" + t.valueOf(),
                                                label: {
                                                    text: v,
                                                    rotation: 0,
                                                    align: "center",
                                                    x: -2,
                                                    y: -5,
                                                    style: {
                                                        color: e,
                                                        fontWeight: "bold"
                                                    }
                                                },
                                                zIndex: 20
                                            })
                                        }
                                    }
                                if (pt && ut && ut.forEach(t=>{
                                    let u = t.eventAbbr
                                      , o = t.eventName
                                      , h = u.length <= 3 ? "12px" : "10px"
                                      , i = null
                                      , r = null;
                                    o === ni ? (i = gt,
                                    r = gt) : (i = tr,
                                    r = ir);
                                    const f = t.events
                                      , e = [];
                                    for (let t = 0; t < f.length; t++) {
                                        let i = f[t]
                                          , r = moment(i.StartTime);
                                        if (!r.isAfter(n.chartEndTime)) {
                                            let u = moment(i.EndTime);
                                            u.isBefore(n.chartStartTime) || e.push([r, u])
                                        }
                                    }
                                    e.forEach(t=>{
                                        var c, v, f;
                                        let e = t[0]
                                          , o = t[1]
                                          , l = e.clone().format("YYYY-MM-DDTHH:mm:ssZ")
                                          , a = o.clone().format("YYYY-MM-DDTHH:mm:ssZ");
                                        s[0] && (l = e.clone().utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ssZ"),
                                        a = o.clone().utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ssZ"));
                                        c = bs.rangeValue(s, l, a);
                                        for (v in c)
                                            f = moment(c[v]),
                                            f.isBetween(e, o, null, "[]") && (n.chart.xAxis[0].removePlotLine("RPeakLine" + f.valueOf()),
                                            n.chart.xAxis[0].removePlotLine("NoiseLine" + f.valueOf()),
                                            n.chart.xAxis[0].removePlotLine("SpecialEventLine" + f.valueOf()),
                                            n.chart.xAxis[0].addPlotLine({
                                                value: f,
                                                color: i,
                                                width: 1,
                                                id: "SectionEventLine" + f.valueOf(),
                                                label: {
                                                    text: u,
                                                    rotation: 0,
                                                    align: "center",
                                                    x: -2,
                                                    y: -5,
                                                    style: {
                                                        color: r,
                                                        "font-weight": "bold",
                                                        "font-size": h
                                                    }
                                                },
                                                zIndex: 20
                                            }))
                                    }
                                    )
                                }
                                ),
                                !(o.timeParameter === undefined || o.timeParameter === "")) {
                                    let i = new Date(o.timeParameter)
                                      , t = i.getTime() - k * c
                                      , r = t + (k + tt) * c
                                      , u = moment(t)
                                      , f = moment(r);
                                    n.chart.xAxis[0].addPlotBand({
                                        from: u,
                                        to: f,
                                        color: ki,
                                        id: "LoadingBand"
                                    })
                                }
                            }
                        },
                        selection: function(t) {
                            var i = y[n.id], s = parseInt(i.id.substring(5)), f, e;
                            if (t.preventDefault(),
                            o.activeAdvisory) {
                                let n = o.activeAdvisory.record.startTime
                                  , y = moment(t.xAxis[0].min)
                                  , p = moment(t.xAxis[0].max)
                                  , w = a.getGridParam("page");
                                for (let n = 0; n < st; n++) {
                                    let t = $("#chart" + (n + 1)).highcharts();
                                    t && (t.xAxis[0].removePlotBand("LoadingBand"),
                                    t.xAxis[0].removePlotBand("SelectedBand"),
                                    t.xAxis[0].removePlotBand("DblClickBand"),
                                    t.xAxis[0].removePlotBand("ClickBand"))
                                }
                                i.chart.xAxis[0].addPlotBand({
                                    from: y,
                                    to: p,
                                    color: ki,
                                    id: "SelectedBand"
                                });
                                ui();
                                f = (p.diff(n, "ms") / c).toFixed(0) - (y.diff(n, "ms") / c).toFixed(0);
                                e = p.diff(n, "ms") - y.diff(n, "ms");
                                let k = y.format("mm:ss.SSS")
                                  , d = p.format("mm:ss.SSS");
                                o.indexAndSecondsLength = "Len:" + f + "," + e + "ms";
                                o.showStartTime = k + "—" + d;
                                let b = y.diff(i.chartStartTime.clone(), "ms");
                                o.chartContent_startTime = y;
                                o.chartContent_s = b;
                                o.chartContent_chartId = r;
                                o.chartContent_operate = "selection";
                                o.chart_idx = s - 1;
                                let g = i.chartStartTime.clone();
                                o.offsetTime = y.diff(g, "seconds");
                                ri(r, b);
                                u(function() {
                                    let t = o.sliceName;
                                    o.selection.recordRange = (y.diff(n, "ms") / c).toFixed(0) + " - " + (p.diff(n, "ms") / c).toFixed(0);
                                    o.selection.sliceRange = (y.diff(n, "ms") / c - t / vt).toFixed(0) + " - " + (p.diff(n, "ms") / c - t / vt).toFixed(0);
                                    o.selection.pageRange = (y.diff(n, "ms") / c - t / vt - (w - 1) % yt * l * h * v).toFixed(0) + " - " + (p.diff(n, "ms") / c - t / vt - (w - 1) % yt * l * h * v).toFixed(0)
                                })
                            }
                        },
                        click: function(i) {
                            var u = y[n.id], pt, wt, rt, ut, d, ft, a, p, et, g, bt, nt, w;
                            i.preventDefault();
                            var gt = i.xAxis[0].value
                              , vt = moment(gt)
                              , it = parseInt(u.id.substring(5))
                              , ni = it - 1;
                            o.deviceLeads === 3 && (it = 1);
                            let f = u.chartStartTime.clone().add(-(it - 1) * h, "seconds")
                              , yt = f.clone().add(l * h, "seconds");
                            if (s) {
                                pt = u.chartStartTime.clone();
                                wt = u.chartEndTime.clone();
                                s[0] && (pt = u.chartStartTime.clone().utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ssZ"),
                                wt = u.chartEndTime.clone().utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ssZ"));
                                var ti = f.clone().utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ssZ")
                                  , ii = yt.clone().utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ssZ")
                                  , b = bs.rangeValue(s, ti, ii)
                                  , e = [];
                                for (rt in b)
                                    ut = moment(b[rt]),
                                    ut.isBetween(f, yt, null, "[]") && (e[rt] = Math.abs(vt.diff(ut, "seconds", !0)));
                                d = e[0];
                                for (ft in e)
                                    d >= e[ft] && (d = e[ft]);
                                if (a = e.indexOf(d),
                                a === 0) {
                                    swal({
                                        type: "warning",
                                        title: "提示",
                                        text: "无法选择此R峰",
                                        confirmButtonText: "确定"
                                    });
                                    return
                                }
                                p = moment(b[a]);
                                et = moment(b[a - 1]);
                                o.rPeakindex = p.diff(o.activeAdvisory.record.startTime, "ms", !0) / c;
                                o.preRPeakindex = et.diff(o.activeAdvisory.record.startTime, "ms", !0) / c;
                                g = moment(p.clone().add(-k * c, "ms").utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ss.SSSZ"));
                                bt = moment(p.clone().add(tt * c, "ms").utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ss.SSSZ"));
                                o.offsetTime = vt.diff(f, "seconds");
                                var kt = p.diff(f, "ms", !0) / c
                                  , ot = kt - k + 1
                                  , ct = kt + tt;
                                ot < 0 && (ot = 0);
                                ct > l * h * v && (ct = l * h * v - 1);
                                var dt = et.diff(f, "ms", !0) / c
                                  , lt = dt - k + 1
                                  , at = dt + tt;
                                for (lt < 0 && (lt = 0),
                                at > l * h * v && (at = l * h * v - 1),
                                o.partEcgValues = ht.slice(ot, ct + 1),
                                o.prePartEcgValues = ht.slice(lt, at + 1),
                                nt = 0; nt < st; nt++)
                                    w = $("#chart" + (nt + 1)).highcharts(),
                                    w && (w.xAxis[0].removePlotBand("LoadingBand"),
                                    w.xAxis[0].removePlotBand("SelectedBand"),
                                    w.xAxis[0].removePlotBand("DblClickBand"),
                                    w.xAxis[0].removePlotBand("ClickBand"));
                                u.chart.xAxis[0].addPlotBand({
                                    from: g,
                                    to: bt,
                                    color: "skyblue",
                                    id: "ClickBand"
                                });
                                o.dateTimes = [];
                                o.dateTimes.push(p);
                                ui();
                                let n = g.diff(u.chartStartTime.clone(), "ms");
                                o.chartContent_startTime = g;
                                o.chartContent_s = n;
                                o.chartContent_chartId = r;
                                o.chartContent_operate = "click";
                                ri(r, n);
                                t.$apply(function() {
                                    if (o.chart_idx = ni,
                                    a >= 2) {
                                        let n = moment(b[a - 2]);
                                        o.prepreRPeakindex = n.diff(o.activeAdvisory.record.startTime, "ms", !0) / c
                                    }
                                    o.rr = o.rPeakindex - o.preRPeakindex;
                                    let n = o.preRPeakindex - o.prepreRPeakindex;
                                    o.prepreRPeakindex > 0 && (o.ratio = (o.rr / n).toFixed(2));
                                    console.log("vm.chart_idx:" + o.chart_idx)
                                })
                            }
                        },
                        dblclick: function(t) {
                            var a = y[n.id], kt = t.xAxis[0].value, dt = moment(kt), gt = parseInt(r.substring(5)), b = a.chartStartTime.clone().add(-(gt - 1) * h, "seconds"), rt = b.clone().add(l * h, "seconds"), ut, ft, u, et, p, f, ct, nt, pt, w, wt, bt, it, e;
                            if (s) {
                                var lt = a.chartStartTime.clone()
                                  , at = a.chartEndTime.clone()
                                  , vt = ""
                                  , yt = "";
                                s[0] && (lt = a.chartStartTime.clone().utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ssZ"),
                                at = a.chartEndTime.clone().utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ssZ"),
                                vt = b.clone().utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ssZ"),
                                yt = rt.clone().utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ssZ"));
                                var ni = bs.rangeValue(s, lt, at)
                                  , i = bs.rangeValue(s, vt, yt)
                                  , v = [];
                                for (ut in i)
                                    ft = moment(i[ut]),
                                    ft.isBetween(b, rt, null, "[]") && (v[ut] = Math.abs(dt.diff(ft, "seconds", !0)));
                                u = v[0];
                                for (et in v)
                                    Math.abs(u) >= Math.abs(v[et]) && (u = v[et]);
                                if (p = v.indexOf(u),
                                f = i.indexOf(i[p]),
                                f === 0 && u <= 0 || f < 2)
                                    return;
                                if (f === i.length - 1 && u >= 0)
                                    return;
                                var d = undefined
                                  , g = undefined
                                  , ot = undefined;
                                if (u < 0 && (d = moment(i[f - 1]),
                                g = moment(i[f]),
                                ot = moment(d.clone().add(-k * c, "ms").utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ss.SSSZ")),
                                ct = moment(g.clone().add(tt * c, "ms").utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ss.SSSZ"))),
                                u > 0 && (d = moment(i[f]),
                                g = moment(i[f + 1]),
                                ot = moment(d.clone().add(-k * c, "ms").utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ss.SSSZ")),
                                ct = moment(g.clone().add(tt * c, "ms").utcOffset(s[0]).format("YYYY-MM-DDTHH:mm:ss.SSSZ"))),
                                moment(ot) < b || moment(ct) > rt)
                                    return;
                                for (nt = moment(i[p]),
                                pt = moment(i[p - 1]),
                                o.rPeakindex = nt.diff(o.activeAdvisory.record.startTime, "ms", !0) / c,
                                o.preRPeakindex = pt.diff(o.activeAdvisory.record.startTime, "ms", !0) / c,
                                p >= 2 && (w = moment(i[p - 2]),
                                o.prepreRPeakindex = w.diff(o.activeAdvisory.record.startTime, "ms", !0) / c),
                                wt = ht.slice(o.preRPeakindex, o.rPeakindex + 1),
                                bt = ht.slice(o.prepreRPeakindex, o.preRPeakindex + 1),
                                uu(b, o.preRPeakindex, wt, bt, "R-REcg"),
                                it = 0; it < st; it++)
                                    e = $("#chart" + (it + 1)).highcharts(),
                                    e && (e.xAxis[0].removePlotBand("LoadingBand"),
                                    e.xAxis[0].removePlotBand("SelectedBand"),
                                    e.xAxis[0].removePlotBand("DblClickBand"),
                                    e.xAxis[0].removePlotBand("ClickBand")),
                                    e.xAxis[0].addPlotBand({
                                        from: w,
                                        to: nt,
                                        color: "#E6E6FA",
                                        id: "DblClickBand"
                                    });
                                ui();
                                let t = w.diff(a.chartStartTime.clone(), "ms")
                                  , n = t + nt.diff(w, "ms") / 2;
                                o.chartContent_startTime = w;
                                o.chartContent_s = n;
                                o.chartContent_chartId = r;
                                o.chartContent_operate = "dbclick";
                                ri(r, n)
                            }
                        }
                    }
                },
                title: {
                    text: null
                },
                subtitle: {
                    text: null
                },
                credits: {
                    enabled: !1
                },
                exporting: {
                    enabled: !1
                },
                legend: {
                    enabled: !1
                },
                tooltip: {
                    enabled: !1
                },
                plotOptions: {
                    series: {
                        states: {
                            hover: {
                                enabled: !1
                            }
                        }
                    }
                },
                xAxis: {
                    type: "datetime",
                    tickInterval: v / 5,
                    gridLineWidth: .5,
                    gridLineColor: d,
                    minorGridLineWidth: .2,
                    minorGridLineColor: g,
                    minorTickInterval: 40,
                    tickLength: 0,
                    tickColor: d,
                    lineColor: g,
                    labels: {
                        enabled: !1
                    }
                },
                yAxis: {
                    min: w,
                    max: b,
                    tickInterval: 500,
                    gridLineWidth: .5,
                    gridLineColor: d,
                    minorGridLineWidth: .2,
                    minorGridLineColor: g,
                    minorTickInterval: 100,
                    tickLength: 0,
                    lineColor: g,
                    title: {
                        enabled: !1
                    },
                    labels: {
                        enabled: !0,
                        formatter: function() {
                            if (this.value / 1e3 % 1 == 0)
                                return this.value / 1e3 + "mV"
                        }
                    }
                },
                series: [{
                    type: "line",
                    color: "black",
                    animation: !1,
                    point: {
                        events: {
                            mouseOver: function() {
                                const n = moment(this.x).format("HH:mm:ss.SSS");
                                t.$applyAsync(()=>{
                                    o.cursorTimeText = n
                                }
                                )
                            }
                        }
                    },
                    pointStart: 0,
                    lineWidth: 1,
                    data: n.data
                }]
            }))
        }
        function ou(n) {
            var u, f, t, i;
            if (console.dir(n),
            !bi)
                for (f = 0; f < st; f++)
                    if (t = $("#chart" + (f + 1)).highcharts(),
                    t) {
                        for (i = 0; i < t.xAxis[0].plotLinesAndBands.length; i++)
                            if (t.xAxis[0].plotLinesAndBands[i].id === "ClickBand") {
                                u = t.xAxis[0].plotLinesAndBands[i];
                                break
                            }
                        if (u)
                            break
                    }
            (u || bi) && o.activeAdvisory && n && swal({
                title: "确认增加",
                text: "增加此处ECG的心律类型为【" + n + "】？",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "是的，确认!",
                cancelButtonText: "取消",
                closeOnConfirm: !1,
                closeOnCancel: !0,
                showLoaderOnConfirm: !0
            }, function(t) {
                if (t) {
                    var i = [];
                    i.push(n);
                    e.modifySpecialEvents(o.activeAdvisory.record.device.seqNumber, o.activeAdvisory.record.startTime, o.dateTimes, i, n).then(function(t) {
                        var i, r;
                        $(".hw-overlay").fadeOut();
                        t.data === "true" ? swal({
                            title: "增加成功!",
                            text: "已增加了时间[" + o.dateTimes[0].format("YYYY/MM/DD HH:mm") + "]的心律类型。",
                            type: "success",
                            timer: 1e3
                        }) : swal.showInputError(decodeURIComponent(t.data.error.message));
                        console.dir("showSpecialEventData增加成功！");
                        for (i in p)
                            p[i].name === n && (p[i].count += 1,
                            r = {
                                abbr: p[i].abbr,
                                editable: p[i].editable,
                                isPoint: p[i].isPoint,
                                length: p[i].length,
                                name: p[i].name,
                                sort: p[i].sort,
                                data: o.dateTimes[0]
                            },
                            rt.push(r));
                        ft && ft.clear().rows.add(p).draw();
                        sr()
                    }, function(n) {
                        console.dir(n);
                        r.reject(n)
                    }).then(function() {
                        console.dir("刷新ecg图！");
                        let n = a.getGridParam("page");
                        if (o.deviceLeads === 3)
                            for (let n = 1; n < 4; n++) {
                                let t = "chart" + n;
                                y[t] = {
                                    id: t,
                                    chartStartTime: y[t].chartStartTime,
                                    chartEndTime: y[t].chartEndTime,
                                    chart: undefined,
                                    data: y[t].data
                                };
                                y[t].chart = bt(y[t])
                            }
                        else {
                            let i = u.axis.chart
                              , t = $(i.container).parent().attr("id")
                              , e = i.series[0].options.data;
                            i.xAxis[0].removePlotBand("ClickBand");
                            let r = t.substring(5)
                              , f = o.activeAdvisory.record.startTime.clone().add((n - 1) * h * l, "seconds")
                              , s = f.clone().add((r - 1) * h, "seconds")
                              , c = f.clone().add(r * h, "seconds");
                            y[t] = {
                                id: t,
                                chartStartTime: s,
                                chartEndTime: c,
                                chart: undefined,
                                data: e
                            };
                            y[t].chart = bt(y[t])
                        }
                    }, function(n) {
                        swal.showInputError(decodeURIComponent(n.statusText))
                    })
                }
            })
        }
        function su() {
            if (o.activeAdvisory) {
                var n = 1;
                return n = a ? a.getGridParam("page") : 1,
                r.all([e.getAnalysisResult(o.activeAdvisory.record.device.seqNumber, o.activeAdvisory.record.startTime)]).then(function(n) {
                    var t, s, u, i, r, f, e;
                    if (console.dir(n),
                    n[0].error)
                        p = [{
                            name: "NO",
                            count: "无病症分析数据"
                        }],
                        o.noisePercentOfRecord = "/";
                    else {
                        for (p = n[0].results,
                        console.dir(p),
                        o.noisePercentOfRecord = n[0].record.noisePercentOfRecord,
                        t = p.filter(n=>n.isPoint === !0),
                        t = t.filter(n=>n.name.indexOf("按键") < 0),
                        t = t.filter(n=>n.name.indexOf("排除") < 0),
                        u = 0; u < t.length; u++)
                            for (i = 0; i < t.length - u - 1; i++)
                                t[i].name > t[i + 1].name && (s = t[i],
                                t[i] = t[i + 1],
                                t[i + 1] = s);
                        o.specialEventData_Add = [];
                        r = [];
                        for (f in t)
                            e = 1 + parseInt(f),
                            e % 4 > 0 ? r.push(t[f]) : e > 0 && (r.push(t[f]),
                            o.specialEventData_Add.push(r),
                            r = []);
                        r.length > 0 && o.specialEventData_Add.push(r)
                    }
                    ft && ft.clear().rows.add(p).draw()
                })
            }
        }
        function hu(n) {
            if (o.activeAdvisory) {
                var t = a.getGridParam("page")
                  , i = o.activeAdvisory.record.startTime.clone().add(t * h * l, "seconds");
                r.all([e.getAnalysisDetailsOfSymptoms(o.activeAdvisory.record.device.seqNumber, o.activeAdvisory.record.startTime, n)]).then(function(t) {
                    var r, u, f;
                    if (et[n] = $.extend(!0, [], t[0].events),
                    et[n]) {
                        r = et[n];
                        for (u in r)
                            if (f = moment(r[u]),
                            r[u].eventTime !== undefined && (f = moment(r[u].eventTime)),
                            f.isAfter(i)) {
                                let t = Math.ceil(f.diff(o.activeAdvisory.record.startTime, "ms") / (h * l * 1e3));
                                ni = n;
                                a.setGridParam({
                                    page: t
                                }).trigger("reloadGrid");
                                break
                            }
                    }
                })
            }
        }
        function cu(n) {
            if (o.activeAdvisory) {
                var t = a.getGridParam("page")
                  , i = o.activeAdvisory.record.startTime.clone().add((t - 1) * h * l, "seconds");
                r.all([e.getAnalysisDetailsOfSymptoms(o.activeAdvisory.record.device.seqNumber, o.activeAdvisory.record.startTime, n)]).then(function(t) {
                    var e, r, u, f;
                    if (et[n] = $.extend(!0, [], t[0].events),
                    console.dir(et[n]),
                    et[n]) {
                        e = et[n];
                        r = $.extend(!0, [], e);
                        r.reverse();
                        for (u in r)
                            if (f = moment(r[u]),
                            r[u].eventTime !== undefined && (f = moment(r[u].eventTime)),
                            f.isBefore(i)) {
                                let t = Math.ceil(f.diff(o.activeAdvisory.record.startTime, "ms") / (h * l * 1e3));
                                ni = n;
                                a.setGridParam({
                                    page: t
                                }).trigger("reloadGrid");
                                break
                            }
                    }
                })
            }
        }
        function er(n) {
            if (console.dir(o.activeAdvisory),
            o.activeAdvisory) {
                let i = o.activeAdvisory.record.startTime.clone()
                  , r = o.activeAdvisory.record.endTime.clone()
                  , t = moment(n);
                if (t.isBetween(i, r, null, "[]")) {
                    let n = Math.ceil(t.diff(o.activeAdvisory.record.startTime, "ms") / (h * l * 1e3));
                    a.setGridParam({
                        page: n
                    }).trigger("reloadGrid")
                }
            }
        }
        function lu(t) {
            n.paramObj.map.set("name", t);
            EcgTools.gotoNewPage(f, "/EcgAnalysis/Illness", n.paramObj.map)
        }
        function au() {
            EcgTools.gotoNewPage(f, "/EcgAnalysis/AtrialFibrillation", n.paramObj.map)
        }
        function vu(n, t) {
            if (vi = t,
            a) {
                let n = a.getGridParam("page");
                ii(n)
            }
        }
        function yu(n, t) {
            if (console.log("rPeakSwitchChanged:" + t),
            console.dir(t),
            pt = t,
            a) {
                let n = a.getGridParam("page");
                ii(n)
            }
        }
        function pu(n, t) {
            switch (t) {
            case "0":
                w = -1e3;
                b = 2500;
                break;
            case "5":
                w = -2500;
                b = 2500;
                break;
            case "10":
                w = -5e3;
                b = 5e3;
                break;
            case "20":
                w = -1e4;
                b = 1e4
            }
            if (a) {
                let n = a.getGridParam("page");
                ii(n)
            }
        }
        function wu(n) {
            var t = o.dateTimes[0].clone().add(-10, "seconds")
              , i = o.dateTimes[0].clone().add(10, "seconds");
            let r = $("#modal-chart-zoomin-ecgview").width()
              , u = "-" + parseInt(r) / 3 + "px";
            $("#modal-chart-zoomin-ecgview").modal("show").css({
                "margin-left": u
            });
            e.getEcgData(o.activeAdvisory.record.device.seqNumber, o.activeAdvisory.record.startTime, t, i).then(function(t) {
                var i, e, u, r;
                let f = t.ecgData;
                o.deviceLeads === 1 && (i = $.extend(!0, [], f[0]));
                o.deviceLeads === 3 && (i = $.extend(!0, [], f[n]));
                e = t.sampling;
                v = e;
                c = 1e3 / v;
                for (u in i)
                    i[u] = i[u] * 1e3;
                for (r = i; r.length < v * 10; )
                    r.push(0);
                let s = {
                    time: o.dateTimes[0],
                    data: r
                };
                bu("container_zoomin", s)
            })
        }
        function bu(n, t) {
            o.zoominRuleChart = Highcharts.chart(n, {
                chart: {
                    panning: !0,
                    resetZoomButton: {
                        theme: {
                            display: "none"
                        }
                    },
                    marginTop: 50,
                    events: {
                        load: function() {
                            var n = this;
                            n.xAxis[0].addPlotLine({
                                value: v * 10,
                                color: "#AFEEEE",
                                width: 1,
                                id: "SpecialEventLine",
                                label: {
                                    text: "",
                                    rotation: 0,
                                    align: "center",
                                    x: -2,
                                    y: -5,
                                    style: {
                                        color: "#fff",
                                        fontWeight: "bold"
                                    }
                                },
                                zIndex: 20
                            })
                        },
                        click: function() {}
                    }
                },
                title: {
                    text: null
                },
                subtitle: {
                    text: null
                },
                credits: {
                    enabled: !1
                },
                exporting: {
                    enabled: !0,
                    filename: "time" + rr(t.time),
                    width: 1560
                },
                legend: {
                    enabled: !1
                },
                tooltip: {
                    enabled: !1
                },
                xAxis: {
                    min: v * 6,
                    max: v * 14,
                    type: "datetime",
                    tickInterval: v / 5,
                    gridLineWidth: .5,
                    gridLineColor: d,
                    minorGridLineWidth: .2,
                    minorGridLineColor: g,
                    minorTickInterval: 10,
                    lineColor: g,
                    tickLength: 0,
                    labels: {
                        enabled: !0,
                        step: 5,
                        formatter: function() {
                            return this.value / v + "s"
                        }
                    }
                },
                yAxis: {
                    min: w,
                    max: b,
                    tickInterval: 500,
                    gridLineWidth: .5,
                    gridLineColor: d,
                    minorGridLineWidth: .2,
                    minorGridLineColor: g,
                    minorTickInterval: 200,
                    lineColor: g,
                    tickLength: 0,
                    title: {
                        enabled: !1
                    },
                    labels: {
                        enabled: !0,
                        formatter: function() {
                            if (this.value / 1e3 % 1 == 0)
                                return this.value / 1e3 + "mV"
                        }
                    }
                },
                series: [{
                    animation: !1,
                    type: "line",
                    color: "black",
                    enableMouseTracking: !1,
                    pointStart: 0,
                    lineWidth: 1,
                    data: t.data
                }]
            });
            localforage.getItem(dt, function(n, t) {
                t != null ? (console.log("localforage:get " + dt),
                wi(t)) : (wi(1),
                console.log(n))
            })
        }
        function ku() {
            var r, u;
            let t = o.offsetTime;
            console.dir(document.cookie);
            console.log("offsetTime:" + t);
            $("#modal-chart-ruler").modal();
            $("[name='rule-switch']").bootstrapSwitch("state", !0);
            var f = o.chartEcgDatas_Display[o.chart_idx]
              , n = 0
              , i = 4;
            t >= 14 ? (n = 11,
            i = 15) : t <= 2 ? (n = 0,
            i = 4) : (n = t - 2,
            i = n + 4);
            r = f.data.slice(n * 250, i * 250);
            u = {
                data: r
            };
            du("container_ruler", u);
            o.heightFix !== 0 && or()
        }
        function du(n, t) {
            console.dir(t);
            o.chartZoom = Highcharts.chart(n, {
                chart: {
                    panning: !0,
                    resetZoomButton: {
                        theme: {
                            display: "none"
                        }
                    },
                    marginTop: 10,
                    events: {
                        load: function() {
                            var n = this
                        },
                        click: function() {}
                    }
                },
                title: {
                    text: null
                },
                subtitle: {
                    text: null
                },
                credits: {
                    enabled: !1
                },
                exporting: {
                    enabled: !1
                },
                legend: {
                    enabled: !1
                },
                tooltip: {
                    enabled: !1
                },
                xAxis: {
                    min: 0,
                    max: 1e3,
                    tickInterval: 50,
                    gridLineWidth: .5,
                    gridLineColor: d,
                    minorGridLineWidth: .2,
                    tickLength: 0,
                    minorGridLineColor: ei,
                    minorTickInterval: 10,
                    labels: {
                        enabled: !1
                    }
                },
                yAxis: {
                    min: w,
                    max: b,
                    tickInterval: 500,
                    gridLineWidth: .5,
                    gridLineColor: d,
                    minorGridLineWidth: .2,
                    minorGridLineColor: ei,
                    minorTickInterval: 100,
                    tickLength: 0,
                    title: {
                        enabled: !1
                    },
                    labels: {
                        enabled: !0,
                        formatter: function() {
                            if (this.value / 1e3 % 1 == 0)
                                return this.value / 1e3 + "mV"
                        }
                    }
                },
                series: [{
                    animation: !1,
                    type: "line",
                    color: "black",
                    enableMouseTracking: !1,
                    pointStart: 0,
                    lineWidth: 1,
                    data: t.data
                }]
            })
        }
        function or() {
            var t = document.getElementById("container_ruler"), i, n, u;
            document.cookie = "container_heightFix=" + o.heightFix;
            i = o.originHeight;
            n = i + Number(o.heightFix);
            console.dir("target1.style.height : " + t.style.height);
            t.style.height = n + "px";
            var f = n / i
              , e = o.originWidth
              , r = e * f;
            t.style.width = r + "px";
            u = gu(n, r);
            o.chartZoom.update(u)
        }
        function gu(n, t) {
            return {
                chart: {
                    height: n,
                    width: t
                }
            }
        }
        function nf(t, i) {
            console.dir(i);
            n.$broadcast("RuleSwitchChanged", i)
        }
        function tf(n, t) {
            console.dir(t);
            var i;
            t ? (i = {
                yAxis: {
                    min: w,
                    max: b,
                    tickInterval: 500,
                    gridLineWidth: .5,
                    gridLineColor: d,
                    minorGridLineWidth: .2,
                    minorGridLineColor: ei,
                    minorTickInterval: 100,
                    tickLength: 0,
                    title: {
                        enabled: !1
                    },
                    labels: {
                        enabled: !0,
                        formatter: function() {
                            if (this.value / 1e3 % 1 == 0)
                                return this.value / 1e3 + "mV"
                        }
                    }
                }
            },
            o.chartZoom.update(i)) : (i = {
                yAxis: {
                    title: {
                        text: null
                    },
                    max: null,
                    min: null,
                    tickInterval: null,
                    minorTickInterval: null,
                    gridLineColor: null,
                    gridLineWidth: null,
                    minorGridLineColor: null,
                    minorGridLineWidth: null,
                    tickLength: null,
                    minorTickLength: null,
                    labels: {
                        formatter: function() {
                            return this.value
                        },
                        enabled: !1
                    }
                }
            },
            o.chartZoom.update(i))
        }
        function ri(n, t) {
            if (n === o.chartContent_chartId) {
                let s = document.getElementById(n)
                  , f = s.getBoundingClientRect()
                  , h = $("#chartTop").height()
                  , i = f.top - h - 32;
                i = i + $("#sp2").scrollTop();
                let u = $("#" + n).find(".highcharts-plot-border")
                  , e = u[0].width.animVal.value
                  , c = f.width
                  , l = c - e
                  , r = l + e / 15e3 * t;
                if (o.chartContent_operate === "click")
                    $(".chartContentdiv").css("left", r),
                    $(".chartContentdiv").css("top", i),
                    $(".chartContentdiv").show();
                else if (o.chartContent_operate === "dbclick")
                    r = r - 30,
                    $(".downloadRREcgdiv").css("left", r),
                    $(".downloadRREcgdiv").css("top", i),
                    $(".downloadRREcgdiv").show();
                else if (o.chartContent_operate === "selection") {
                    u = $("#" + n).find(".highcharts-plot-background");
                    let t = u[0].attributes.height.value;
                    $(".chartContentbutton3leadsdiv").css("left", r);
                    $(".chartContentbutton3leadsdiv").css("top", i);
                    $(".chartContentbutton3leadsdiv").show();
                    let f = i + 30;
                    $(".indexAndSecondsLengthdiv").css("left", r);
                    $(".indexAndSecondsLengthdiv").css("top", f);
                    $(".indexAndSecondsLengthdiv").show();
                    let e = parseFloat(i) + parseFloat(t);
                    $(".showStartTimediv").css("left", r);
                    $(".showStartTimediv").css("top", e);
                    $(".showStartTimediv").show()
                }
            }
        }
        function rf() {
            document.getElementById("partEcgData").click();
            document.getElementById("partEcgData1").click()
        }
        function sr() {
            o.chartContent_chartId = "";
            o.chartContent_s = 0;
            o.chartContent_startTime = "";
            o.chartContent_operate = "";
            o.chartContent_alreadyShow = !1;
            o.indexAndSecondsLength = "";
            o.showStartTime = "";
            $(".downloadRREcgdiv").hide();
            $(".chartContentdiv").hide();
            $(".chartContentbutton3leadsdiv").hide();
            $(".indexAndSecondsLengthdiv").hide();
            $(".showStartTimediv").hide()
        }
        function ui() {
            $(".downloadRREcgdiv").hide();
            $(".chartContentdiv").hide();
            $(".chartContentbutton3leadsdiv").hide();
            $(".indexAndSecondsLengthdiv").hide();
            $(".showStartTimediv").hide()
        }
        function uf() {
            o.heartRateChartPageNum = o.heartRateChartPageNum - 1;
            o.heartRateChartPageNum > 0 && o.heartRateChartPageNum <= o.heartRatePageCountArray.length && kt(o.heartRateChartPageNum)
        }
        function ff() {
            o.heartRateChartPageNum = o.heartRateChartPageNum + 1;
            o.heartRateChartPageNum > 0 && o.heartRateChartPageNum <= o.heartRatePageCountArray.length && kt(o.heartRateChartPageNum)
        }
        function kt(n) {
            if (o.heartRateChartPageNum = n,
            o.activeAdvisory) {
                at = o.activeAdvisory.record.startTime.clone().startOf("day");
                o.activeAdvisory.record.startTime.hours() >= 12 && at.add(12, "hour");
                si = o.activeAdvisory.record.endTime.clone().endOf("day");
                o.activeAdvisory.record.endTime.hours() < 12 && si.subtract(12, "hour");
                let r = Math.ceil(si.diff(at, "hours") / lt);
                console.log("heartRatePageCount:" + r);
                for (let n = 0; n < r; n++)
                    o.heartRatePageCountArray[n] = n + 1;
                let t = at.clone().add((n - 1) * lt, "hours")
                  , i = at.clone().add(n * lt, "hours");
                o.heartRatePageText = " " + t.format("YYYY/MM/DD HH:mm") + " - " + i.format("HH:mm");
                nr = t;
                o.requestStartTime = t.isBefore(o.activeAdvisory.record.startTime) ? o.activeAdvisory.record.startTime : t;
                o.requestEndTime = i.isAfter(o.activeAdvisory.record.endTime) ? o.activeAdvisory.record.endTime : i;
                e.getHeartRateData(o.activeAdvisory.record.device.seqNumber, o.activeAdvisory.record.startTime, o.requestStartTime, o.requestEndTime).then(function(n) {
                    var f, u;
                    let r = [];
                    if (n.length > 0) {
                        let e = n.slice(0);
                        f = o.requestStartTime.clone();
                        let s = t.clone();
                        for (let n = 0; n < i.diff(t, "minutes"); n++)
                            r.push({
                                x: s.toDate(),
                                y: null
                            }),
                            s.add(1, "minute");
                        u = f.milliseconds(0).seconds(0).diff(t, "minutes");
                        for (let n = 0; n < e.length; n++) {
                            if (u + n >= r.length)
                                break;
                            r[u + n].y = parseInt(e[n])
                        }
                    } else {
                        let n = t.clone();
                        for (let u = 0; u < i.diff(t, "minutes"); u++)
                            r.push({
                                x: n.toDate(),
                                y: null
                            }),
                            n.add(1, "minute")
                    }
                    ci = r;
                    let e = ef("chartHeartRate", r, o.activeAdvisory.record.startTime, o.activeAdvisory.record.endTime);
                    o.init_page && (o.init_page = !1)
                }, function(n) {
                    console.dir(n)
                })
            }
        }
        function ef(n, t, i, r) {
            return ct = Highcharts.chart(n, {
                chart: {
                    backgroundColor: vr,
                    height: (gi - di + 46) / 25 / (lt * 6 + 84 / 25) * 100 + "%",
                    zoomType: "x",
                    events: {
                        load: function() {
                            let n = this;
                            n.xAxis[0].addPlotLine({
                                id: "recordStartTime",
                                value: i,
                                color: lr,
                                dashStyle: "DashDot",
                                width: 2
                            });
                            n.xAxis[0].addPlotLine({
                                id: "recordEndTime",
                                value: r,
                                color: ar,
                                dashStyle: "DashDot",
                                width: 2
                            });
                            hi && (o.plotTime = hi.clone().milliseconds(0).seconds(0),
                            yi(n, o.plotTime))
                        },
                        selection: function(n) {
                            n.preventDefault()
                        },
                        dblclick: function(n) {
                            console.dir(n);
                            let i = this
                              , r = n.xAxis[0].value
                              , t = moment(r);
                            if (o.activeAdvisory) {
                                o.plotTime = t.clone().milliseconds(0).seconds(0);
                                console.dir(o.plotTime);
                                yi(i, t);
                                let n = o.activeAdvisory.record.startTime
                                  , r = o.activeAdvisory.record.endTime;
                                t.isBetween(n, r, null, "[]") && (console.dir("showAllEcgCharts:" + o.plotTime),
                                pi(o.plotTime))
                            }
                        }
                    }
                },
                title: {
                    text: null
                },
                subtitle: {
                    text: null
                },
                credits: {
                    enabled: !1
                },
                exporting: {
                    enabled: !1
                },
                legend: {
                    enabled: !1
                },
                tooltip: {
                    enabled: !1
                },
                xAxis: {
                    type: "datetime",
                    tickInterval: 36e5,
                    gridLineWidth: .2,
                    gridLineColor: "gray",
                    labels: {
                        enabled: !0
                    }
                },
                yAxis: {
                    min: di,
                    max: gi,
                    tickInterval: 50,
                    gridLineWidth: 0,
                    minorGridLineWidth: .2,
                    minorGridLineColor: "gray",
                    minorTickInterval: 25,
                    title: {
                        enabled: !0,
                        text: "心率 (bpm)"
                    },
                    labels: {
                        enabled: !0,
                        formatter: function() {
                            return this.value
                        }
                    }
                },
                series: [{
                    animation: !1,
                    type: "line",
                    enableMouseTracking: !1,
                    lineWidth: 1,
                    data: t
                }]
            }),
            t === undefined && (ct.credits || ct.addCredits({
                enabled: !0,
                text: "NO HeartRate Data",
                href: "#",
                position: {
                    x: -500,
                    y: -60
                },
                style: {
                    "z-index": "999",
                    "font-size": "24px"
                }
            })),
            ct
        }
        function ot(n, t, i, r) {
            t.StartTime = moment(t.StartTime);
            t.EndTime = moment(t.EndTime);
            t.StartTime.isAfter(o.requestStartTime) && o.requestEndTime.isAfter(t.EndTime) && n.xAxis[0].addPlotBand({
                from: t.StartTime,
                to: t.EndTime,
                color: i,
                id: r
            })
        }
        function of() {
            return ut ? r.resolve(ut) : e.getSectionEventData(o.activeAdvisory.record.device.seqNumber, o.activeAdvisory.record.startTime)
        }
        function yi(n, t) {
            if (console.dir("plotMinuteLine"),
            console.dir(t.format()),
            o.activeAdvisory) {
                let i = o.activeAdvisory.record.startTime.clone().seconds(0).milliseconds(0)
                  , r = o.activeAdvisory.record.endTime.clone().seconds(0).milliseconds(0);
                if (n.xAxis[0].removePlotLine("EcgMinute"),
                t.isBetween(i, r, null, "[]")) {
                    let t = o.plotTime.diff(nr, "m")
                      , i = t < ci.length ? ci[t].y : "";
                    n.xAxis[0].addPlotLine({
                        value: o.plotTime,
                        color: cr,
                        width: 1,
                        id: "EcgMinute",
                        label: {
                            text: i,
                            rotation: 0
                        },
                        zIndex: 30
                    })
                }
            }
        }
        function pi(n) {
            if (o.display_startTime = n,
            oi = n,
            o.activeAdvisory) {
                o.showMinuteBtn || t.$apply(function() {
                    o.showMinuteBtn = !0
                });
                let i = n.clone()
                  , r = Math.floor(i.diff(o.activeAdvisory.record.startTime.clone(), "seconds") / h / l) + 1;
                a.setGridParam({
                    page: r
                }).trigger("reloadGrid")
            }
            console.log("vm.showMinuteBtn:" + o.showMinuteBtn)
        }
        function sf(n) {
            var r, i, u, s, h, t, f, e;
            if (console.dir(n),
            console.dir(oi),
            r = $("#chartHeartRate").highcharts(),
            r) {
                for (u = 0; u < r.xAxis[0].plotLinesAndBands.length; u++)
                    if (r.xAxis[0].plotLinesAndBands[u].id === "EcgMinute") {
                        i = r.xAxis[0].plotLinesAndBands[u];
                        break
                    }
                s = o.activeAdvisory.record.startTime;
                h = o.activeAdvisory.record.endTime;
                i ? (t = moment(i.options.value).add(n, "seconds"),
                f = moment(s).seconds(0),
                e = moment(h).seconds(0),
                t.isBetween(f, e, null, "[]") && (i.options.value = t,
                i.options.label.text = t.format("HH:mm:ss"),
                i.axis.update(),
                o.plotTime = t.clone(),
                pi(t))) : (t = oi.add(n, "seconds"),
                f = moment(s).seconds(0),
                e = moment(h).seconds(0),
                t.isBetween(f, e, null, "[]") && (o.plotTime = t.clone(),
                pi(t)))
            }
        }
        function wi(n) {
            localforage.setItem(dt, n).then(function() {
                console.log("localforage:set " + dt)
            }).catch(function(n) {
                console.log(n)
            });
            let t = o.zoominRuleHeight * n;
            $("#modal_content").css("height", t);
            $("#btnRule1").removeClass("btn-selected");
            $("#btnRule2").removeClass("btn-selected");
            $("#btnRule" + n).addClass("btn-selected");
            $("#container_zoomin").css("height", t);
            let i = {
                chart: {
                    height: t
                }
            };
            o.zoominRuleChart.update(i)
        }
        var o = this
          , bi = !1;
        o.type;
        o.rPeakindex = undefined;
        o.preRPeakindex = undefined;
        o.prepreRPeakindex = 0;
        o.partEcgValues = undefined;
        o.prePartEcgValues = undefined;
        o.timeParameter = undefined;
        o.ecgShow = !1;
        o.rPeakShow = !1;
        o.init = fu;
        o.activeAdvisory = undefined;
        o.ecgTimeSectionText = undefined;
        o.ecgPageDesc = null;
        o.cursorTimeText = null;
        o.specialEventData_Add = [];
        o.gotoNextEventPage = hu;
        o.gotoPrevEventPage = cu;
        o.jumpToTime = er;
        o.jumpToTimeFlag = !1;
        o.onbutton = tu;
        o.showPromt = gr;
        o.showNewIllNessPromt = nu;
        o.gotoIllnessPage = lu;
        o.gotoArtialFibrillationPage = au;
        o.showZoomIllNessPromt = wu;
        o.showZoomRulerPromt = ku;
        o.toLocalTimeStringAll = rr;
        o.isShowNormalBeat = !0;
        o.sliceName;
        o.dateTimes = [];
        o.chartEcgDatas_Display = [];
        o.noisePercentOfEffective;
        o.noisePercentOfRecord;
        o.addSpecialEvents = ou;
        o.heightFix = 0;
        o.fixHeight = or;
        o.originHeight = 280;
        o.originWidth = 800;
        o.chartZoom = null;
        o.hsStats;
        o.isResearcher = !1;
        o.selection = {
            recordRange: null,
            sliceRange: null,
            pageRange: null
        };
        o.zoominRuleChart;
        o.zoominRuleHeight = 260;
        o.zoominRule = wi;
        var dt = "CHART_RATIO_ECGVIEWER", fi, hr, y = {}, h = 15, l = 4, st = 4, v = 250, w = -1500, b = 1500, d = "#febabc", ei = "#ff0000", g = "#fed3d3", ki = "#FFD54F", ht, a, it;
        o.init_page = !0;
        var oi, ct, lt = 12, di = 0, gi = 150, at, si, cr = "blue", lr = "#F7DC6F", ar = "#F8C471", vr = "#f8f8f8";
        o.heartRatePageText;
        o.showMinuteBtn = !1;
        o.btnBefore = "前一分钟";
        o.btnAfter = "后一分钟";
        o.pageTime = 60;
        o.heartRatePageCount = 0;
        o.heartRatePageCountArray = [];
        o.goNextMinute = sf;
        o.showHeartRate = kt;
        o.showHeartRatePrePage = uf;
        o.showHeartRateNextPage = ff;
        var hi = null
          , ci = []
          , nr = null
          , yr = "#AED6F1"
          , nt = new Map;
        nt.set("房颤/房扑", "#fedcbd");
        nt.set("窦性心律不齐", "#fcf16e");
        nt.set("室性心动过速", "#FADBD8");
        nt.set("室上性心动过速", "#EBDEF0");
        nt.set("ST段抬高", "#FFBBFF");
        nt.set("ST段压低", "#B4EEB4");
        var s, tr = "#AFEEEE", ir = "darkblue", p, rt, ut, ft, pr = "#AFEEEE", wr = "darkblue", gt = "red", ni = null, et = {}, li, br = "#7FB3D5", kr = "#F1948A", k = 100, tt = 100, ai = 300, yt, vt = 2, vi = !1, pt = !0, wt = "", c;
        o.sectionData;
        o.queryType = "";
        o.recordStartTime = "";
        o.record_keyword = "";
        o.pageIndex = 1;
        o.isResearcher;
        o.deviceLeads = 0;
        o.deviceLeads3 = !1;
        o.ratio = "";
        o.rr = "";
        o.chart_idx;
        o.offsetTime;
        o.chartContent_startTime;
        o.chartContent_s = 0;
        o.chartContent_chartId = "";
        o.chartContent_operate = "";
        o.downloadRREcg = rf;
        o.indexAndSecondsLength = "";
        o.showStartTime = "";
        o.chartContent_alreadyShow = !1;
        dr()
    }
    angular.module("app.EcgAnalysis").controller("EcgViewerController", n);
    n.$inject = ["$rootScope", "$scope", "$compile", "$q", "$timeout", "$window", "EcgDataService"]
}
)(),
function() {
    "use strict";
    function n(n, t, i) {
        function a(u, f, e, o) {
            var h = t.defer()
              , s = u + f.format("YYYY-MM-DDTHH:mm:ss.SSSZ") + e.format("YYYY-MM-DDTHH:mm:ss.SSSZ") + o.format("YYYY-MM-DDTHH:mm:ss.SSSZ");
            return r.has(s) ? (console.log("get ecg from cache:" + s),
            h.resolve(r.get(s))) : (f.isBetween(e, o) && (e = f),
            i.wrapRequest(n.get(platform.ApiServer + "/EcgAnalysis/GetEcgData", {
                params: {
                    deviceSeq: u,
                    recordStartTime: f.format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
                    startTime: e.format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
                    endTime: o.format("YYYY-MM-DDTHH:mm:ss.SSSZ")
                },
                withCredentials: !0
            })).then(function(n) {
                var t = n.data;
                if (e === f)
                    while (t.ecgData[0].length < t.sampling * 60)
                        t.ecgData[0].unshift(0);
                r.set(s, t);
                console.log("add ecg cache:" + s);
                h.resolve(t)
            }, function(n) {
                h.reject(n)
            })),
            h.promise
        }
        function v(r, u, f, e) {
            var h = t.defer()
              , s = r + u.format("YYYY-MM-DDTHH:mm:ss.SSSZ") + f.format("YYYY-MM-DDTHH:mm:ss.SSSZ") + e.format("YYYY-MM-DDTHH:mm:ss.SSSZ");
            return o.has(s) ? (console.log("get rPeak from cache:" + s),
            h.resolve(o.get(s))) : i.wrapRequest(n.get(platform.ApiServer + "/EcgAnalysis/GetRPeakData", {
                params: {
                    deviceSeq: r,
                    recordStartTime: u.format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
                    startTime: f.format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
                    endTime: e.format("YYYY-MM-DDTHH:mm:ss.SSSZ")
                },
                withCredentials: !0
            })).then(function(n) {
                var t = n.data;
                o.set(s, t);
                console.log("add rPeak cache:" + s);
                h.resolve(t)
            }, function(n) {
                h.reject(n)
            }),
            h.promise
        }
        function y(r, u) {
            var e = t.defer()
              , f = r + u.format("YYYY-MM-DDTHH:mm:ss.SSSZ");
            return s.has(f) ? (console.log("get heartrate info from cache:" + f),
            e.resolve(s.get(f))) : i.wrapRequest(n.get(platform.ApiServer + "/EcgAnalysis/getHeartRateInfo", {
                params: {
                    deviceSeq: r,
                    recordStartTime: u.format("YYYY-MM-DDTHH:mm:ss.SSSZ")
                },
                withCredentials: !0
            })).then(function(n) {
                var t = n.data;
                s.set(f, t);
                console.log("add heartrate info to cache:" + f);
                e.resolve(t)
            }, function(n) {
                e.reject(n)
            }),
            e.promise
        }
        function p(r, u, f, e) {
            var s = t.defer()
              , o = r + u.format("YYYY-MM-DDTHH:mm:ss.SSSZ") + f.format("YYYY-MM-DDTHH:mm:ss.SSSZ") + e.format("YYYY-MM-DDTHH:mm:ss.SSSZ");
            return h.has(o) ? (console.log("get noise from cache:" + o),
            s.resolve(h.get(o))) : i.wrapRequest(n.get(platform.ApiServer + "/EcgAnalysis/getNoiseData", {
                params: {
                    deviceSeq: r,
                    recordStartTime: u.format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
                    startTime: f.format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
                    endTime: e.format("YYYY-MM-DDTHH:mm:ss.SSSZ")
                },
                withCredentials: !0
            })).then(function(n) {
                var t = n.data;
                h.set(o, t);
                console.log("add noise cache:" + o);
                s.resolve(t)
            }, function(n) {
                s.reject(n)
            }),
            s.promise
        }
        function w(r, f, e, o) {
            var h = t.defer()
              , s = r + f.format("YYYY-MM-DDTHH:mm:ss.SSSZ") + e.format("YYYY-MM-DDTHH:mm:ss.SSSZ") + o.format("YYYY-MM-DDTHH:mm:ss.SSSZ");
            return u.has(s) ? (console.log("get HeartRate data from cache:" + s),
            h.resolve(u.get(s))) : i.wrapRequest(n.get(platform.ApiServer + "/EcgAnalysis/GetHeartRateData", {
                params: {
                    deviceSeq: r,
                    recordStartTime: f.format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
                    startTime: e.format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
                    endTime: o.format("YYYY-MM-DDTHH:mm:ss.SSSZ")
                },
                withCredentials: !0
            })).then(function(n) {
                var t = n.data;
                u.set(s, t);
                console.log("add HeartRate data to cache:" + s);
                t && b(t);
                h.resolve(t)
            }, function(n) {
                h.reject(n)
            }),
            h.promise
        }
        function b(n, t, i) {
            t || (t = 6);
            i || (i = 35);
            let e = $.extend(!0, [], n);
            const u = n=>n.reduce((n,t)=>n + t, 0) / n.length;
            let o = n.filter(n=>n > i)
              , s = u(o);
            for (let o = 0; o < n.length; o++)
                if (n[o] < i) {
                    var f = []
                      , r = [];
                    let s = o - t / 2;
                    s < 0 && (s = 0);
                    for (let i = 0; i < t; i++)
                        i + s >= n.length || (r.push(n[i + s]),
                        f.push(e[i + s]));
                    r = r.filter(n=>n > i);
                    r.sort();
                    r.shift();
                    r.pop();
                    let h = u(r)
                      , c = u(f);
                    Object.is(h, NaN) !== !0 && c !== 0 && (n[o] = h)
                }
        }
        function k(r, u, e, o) {
            var h = t.defer()
              , s = r + u.format("YYYY-MM-DDTHH:mm:ss.SSSZ") + e.format("YYYY-MM-DDTHH:mm:ss.SSSZ") + o.format("YYYY-MM-DDTHH:mm:ss.SSSZ");
            return !1 && f.has(s) ? (console.log("get SpecialEvent from cache:" + s),
            h.resolve(f.get(s))) : i.wrapRequest(n.get(platform.ApiServer + "/EcgAnalysis/getSpecialEventResult", {
                params: {
                    deviceSeq: r,
                    recordStartTime: u.format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
                    startTime: e.format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
                    endTime: o.format("YYYY-MM-DDTHH:mm:ss.SSSZ")
                },
                withCredentials: !0
            })).then(function(n) {
                var t = n.data;
                f.set(s, t);
                console.log("add SpecialEvent cache:" + s);
                h.resolve(t)
            }, function(n) {
                h.reject(n)
            }),
            h.promise
        }
        function d(t, r, u, f, e) {
            return i.wrapRequest(n.post(platform.ApiServer + "/EcgAnalysis/ModifySpecialEvents", {
                deviceSeq: t,
                recordStartTime: r,
                dateTimes: u,
                orginTypeNames: f,
                newTypeName: e
            }, {
                withCredentials: !0
            }))
        }
        function g(t, r, u, f, e, o) {
            return i.wrapRequest(n.post(platform.ApiServer + "/EcgAnalysis/ModifySectionEvents", {
                deviceSeq: t,
                recordStartTime: r,
                startTimes: u,
                endTimes: f,
                orginTypeNames: e,
                newTypeName: o
            }, {
                withCredentials: !0
            }))
        }
        function nt(r, u) {
            var e = t.defer()
              , f = r + u.format("YYYY-MM-DDTHH:mm:ss.SSSZ");
            return !1 && c.has(f) ? (console.log("get AnalysisResult from cache:" + f),
            e.resolve(c.get(f))) : i.wrapRequest(n.get(platform.ApiServer + "/EcgAnalysis/getAnalysisResult", {
                params: {
                    deviceSeq: r,
                    recordStartTime: u.format("YYYY-MM-DDTHH:mm:ss.SSSZ")
                },
                withCredentials: !0
            })).then(function(n) {
                var t = n.data;
                c.set(f, t);
                console.log("add AnalysisResult cache:" + f);
                e.resolve(t)
            }, function(n) {
                e.reject(n)
            }),
            e.promise
        }
        function tt(r, u, f) {
            var s = t.defer()
              , o = r + u.format("YYYY-MM-DDTHH:mm:ss.SSSZ") + f;
            return !0 && e.has(o) ? (console.log("get DetailsOfSymptoms from cache:" + o),
            s.resolve(e.get(o))) : i.wrapRequest(n.get(platform.ApiServer + "/EcgAnalysis/GetAnalysisDetailsOfSymptoms", {
                params: {
                    deviceSeq: r,
                    recordStartTime: u.format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
                    symptomsName: f
                },
                withCredentials: !0
            })).then(function(n) {
                var t = n.data;
                e.set(o, t);
                console.log("add DetailsOfSymptoms cache:" + o);
                s.resolve(t)
            }, function(n) {
                s.reject(n)
            }),
            s.promise
        }
        function it(r, u) {
            var e = t.defer()
              , f = r + u.format("YYYY-MM-DDTHH:mm:ss.SSSZ");
            return !0 && l.has(f) ? (console.log("get sectionEventData from cache:" + f),
            e.resolve(l.get(f))) : i.wrapRequest(n.get(platform.ApiServer + "/EcgAnalysis/getSectionEventData", {
                params: {
                    deviceSeq: r,
                    recordStartTime: u.format("YYYY-MM-DDTHH:mm:ss.SSSZ")
                },
                withCredentials: !0
            })).then(function(n) {
                var t = n.data;
                l.set(f, t);
                console.log("add sectionEventData cache:" + f);
                e.resolve(t)
            }, function(n) {
                e.reject(n)
            }),
            e.promise
        }
        var r = new Map
          , u = new Map
          , f = new Map
          , e = new Map
          , o = new Map
          , s = new Map
          , h = new Map
          , c = new Map
          , l = new Map;
        return {
            getEcgData: a,
            getRPeakData: v,
            getHeartRateInfo: y,
            getNoiseData: p,
            getHeartRateData: w,
            getSpecialEventResult: k,
            getAnalysisResult: nt,
            getAnalysisDetailsOfSymptoms: tt,
            modifySpecialEvents: d,
            modifySectionEvents: g,
            getSectionEventData: it
        }
    }
    angular.module("app.EcgAnalysis").factory("EcgDataService", n);
    n.$inject = ["$http", "$q", "httpService"]
}();
var bs = function() {
    "use strict";
    function r(n, i, r) {
        return n ? n.length === undefined ? -1 : (r || (r = t()),
        s(n, i, r)) : -1
    }
    function u(t, i, r) {
        return n(t, i, {
            exists: !0
        }, r)
    }
    function f(t, i, r) {
        return n(t, i, {
            exists: !0,
            end: !0
        }, r)
    }
    function n(n, t, i, r) {
        if (typeof i == "function" && (r = i,
        i = {}),
        n.length === 0)
            return -1;
        if (n.length === 1)
            return 0;
        i = i || {};
        r || (r = this._defaultComparitor());
        var u = h(n, t, r, i.end, i.exists ? !1 : !0);
        return u > n.length - 1 ? u = n.length - 1 : u < 0 && (u = 0),
        u
    }
    function e(n, i, r, u) {
        if (typeof r == "function" && (u = r,
        r = {}),
        r = r || {},
        u || (u = t()),
        !n.length)
            return n[0] = i,
            0;
        var f = f(n, i, u)
          , e = u(n[f], i);
        if (e < 0)
            n.splice(++f, 0, i);
        else if (e > 0)
            n.splice(f, 0, i);
        else if (r.unique)
            n[f] = i;
        else {
            while (u(n[f], i) === 0) {
                if (f >= n.length - 1)
                    break;
                f++
            }
            n.splice(f, 0, i)
        }
        return f
    }
    function i(i, r, u, f) {
        f || (f = t());
        for (var e = n(i, r, f), o = n(i, u, {
            end: !0
        }, f); e <= o; ) {
            if (f(i[e], r) > -1)
                break;
            e++
        }
        while (o >= e) {
            if (f(i[o], u) < 1)
                break;
            o--
        }
        return [e, o]
    }
    function o(n, t, r, u) {
        var f = i(n, t, r, u);
        return n.slice(f[0], f[1] + 1)
    }
    function t() {
        var t, i, n;
        return function(r, u) {
            return u === null && (u = {}),
            t === undefined && (typeof r == "object" && r.hasOwnProperty("v") && (t = !0),
            typeof u == "object" && u.hasOwnProperty("v") && (i = !0)),
            t && (r = r.v),
            i && (u = u.v),
            n === undefined && (n = !1,
            (typeof u == "string" || typeof r == "string") && (n = !0)),
            n && (r = r + ""),
            r > u ? 1 : r < u ? -1 : 0
        }
    }
    function s(n, t, i) {
        for (var u = n.length - 1, f = 0, r, e; u >= f; )
            if (r = c(f, u),
            e = i(n[r], t, r),
            e < 0)
                f = r + 1;
            else if (e > 0)
                u = r - 1;
            else
                return r;
        return -1
    }
    function h(n, t, i, r, u) {
        for (var c = {}, f = 0, o = n.length - 1, e, s, a = n.length, h; f < o; )
            if (e = l(f, o, c),
            s = i(n[e], t, e),
            r ? s > 0 ? o = e - 1 : f = e : s < 0 ? f = e + 1 : o = e,
            !--a)
                break;
        return o === f && i(n[f], t) === 0 ? f : u ? (h = i(n[f], t),
        f === n.length - 1 && h < 0) ? f : f === 0 && h > 0 ? 0 : u ? r ? f + 1 : f - 1 : -1 : -1
    }
    function c(n, t) {
        return n + Math.floor((t - n) / 2)
    }
    function l(n, t, i) {
        var r = n + Math.floor((t - n) / 2);
        return i[r] && (r = n + Math.ceil((t - n) / 2)),
        i[r] = 1,
        r
    }
    return {
        search: r,
        first: u,
        last: f,
        closest: n,
        insert: e,
        range: i,
        rangeValue: o
    }
}()
