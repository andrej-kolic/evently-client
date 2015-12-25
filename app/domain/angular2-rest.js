System.register(['angular2/http'], function(exports_1) {
    var http_1;
    var RESTClient, Path, Query, Body, Header, GET, POST, PUT, DELETE;
    function BaseUrl(url) {
        return function (Target) {
            Target.prototype.getBaseUrl = function () {
                return url;
            };
            return Target;
        };
    }
    exports_1("BaseUrl", BaseUrl);
    function DefaultHeaders(headers) {
        return function (Target) {
            Target.prototype.getDefaultHeaders = function () {
                return headers;
            };
            return Target;
        };
    }
    exports_1("DefaultHeaders", DefaultHeaders);
    function paramBuilder(paramName) {
        return function (key) {
            return function (target, propertyKey, parameterIndex) {
                var metadataKey = propertyKey + "_" + paramName + "_parameters";
                var paramObj = {
                    parameterIndex: parameterIndex,
                    key: key
                };
                if (Array.isArray(target[metadataKey])) {
                    target[metadataKey].push(paramObj);
                }
                else {
                    target[metadataKey] = [paramObj];
                }
            };
        };
    }
    function Headers(headersDef) {
        return function (target, propertyKey, descriptor) {
            descriptor.headers = headersDef;
            return descriptor;
        };
    }
    exports_1("Headers", Headers);
    function methodBuilder(method) {
        return function (url) {
            return function (target, propertyKey, descriptor) {
                var pPath = target[(propertyKey + "_Path_parameters")];
                var pQuery = target[(propertyKey + "_Query_parameters")];
                var pBody = target[(propertyKey + "_Body_parameters")];
                var pHeader = target[(propertyKey + "_Header_parameters")];
                descriptor.value = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i - 0] = arguments[_i];
                    }
                    var body = null;
                    if (pBody) {
                        body = JSON.stringify(args[pBody[0].parameterIndex]);
                    }
                    if (pPath) {
                        for (k in pPath) {
                            url = url.replace("{" + pPath[k].key + "}", args[pPath[k].parameterIndex]);
                        }
                    }
                    var search = new http_1.URLSearchParams();
                    if (pQuery) {
                        pQuery
                            .filter(function (p) { return args[p.parameterIndex]; })
                            .forEach(function (p) {
                            var key = p.key;
                            var value = args[p.parameterIndex];
                            if (value instanceof Object) {
                                value = JSON.stringify(value);
                            }
                            search.set(encodeURIComponent(key), encodeURIComponent(value));
                        });
                    }
                    var headers = new http_1.Headers(this.getDefaultHeaders());
                    for (var k in descriptor.headers) {
                        headers.append(k, descriptor.headers[k]);
                    }
                    if (pHeader) {
                        for (var k in pHeader) {
                            headers.append(pHeader[k].key, args[pHeader[k].parameterIndex]);
                        }
                    }
                    var options = new http_1.RequestOptions({
                        method: method,
                        url: this.getBaseUrl() + url,
                        headers: headers,
                        body: body,
                        search: search
                    });
                    var req = new http_1.Request(options);
                    this.requestInterceptor(req);
                    var observable = this.http.request(req);
                    observable = observable.map(this.responseInterceptor);
                    return observable;
                };
                return descriptor;
            };
        };
    }
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            RESTClient = (function () {
                function RESTClient(http) {
                    this.http = http;
                }
                RESTClient.prototype.getBaseUrl = function () {
                    return null;
                };
                ;
                RESTClient.prototype.getDefaultHeaders = function () {
                    return null;
                };
                ;
                RESTClient.prototype.requestInterceptor = function (req) {
                };
                RESTClient.prototype.responseInterceptor = function (res) {
                    return res;
                };
                return RESTClient;
            })();
            exports_1("RESTClient", RESTClient);
            exports_1("Path", Path = paramBuilder("Path"));
            exports_1("Query", Query = paramBuilder("Query"));
            exports_1("Body", Body = paramBuilder("Body")("Body"));
            exports_1("Header", Header = paramBuilder("Header"));
            exports_1("GET", GET = methodBuilder(http_1.RequestMethod.Get));
            exports_1("POST", POST = methodBuilder(http_1.RequestMethod.Post));
            exports_1("PUT", PUT = methodBuilder(http_1.RequestMethod.Put));
            exports_1("DELETE", DELETE = methodBuilder(http_1.RequestMethod.Delete));
        }
    }
});
//# sourceMappingURL=angular2-rest.js.map