                        scope.renderer = scope.getARenderer();
                        var canvasTarget = scope.domElement;
                        if (scope.canvasElement) {
                                var target = document.getElementById(scope.canvasElement);
                                if (target) {
                                        canvasTarget = target;
                                }
                        }
                        canvasTarget.appendChild(scope.renderer.domElement);
