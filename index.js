let app = angular.module("myApp",[]);
        app.controller("formCtrl",function($scope){
            $scope.code = 0
            $scope.horas = 0
            $scope.tarifa = 0
            
            $scope.calcularSueldo = function(){ 
                let basico = $scope.horas*$scope.tarifa;   
                let neto = 0;
                let descuento = 0;
                if(basico <= 500){
                    neto = basico;
                }
                else if(basico >= 501 && basico <=1000){
                    descuento = 0.02*basico;
                    neto = 0.98*basico;
                }
                else if(basico >= 1001 && basico <=4000){
                    neto = 0.92*basico;
                    descuento = 0.08*basico;
                }
                else if(basico >= 4001 && basico <=8000){
                    neto = 0.85*basico;
                    descuento = 0.15*basico;
                }
                else if(basico >= 8001 && basico <=10000){
                    neto = 0.79*basico;
                    descuento = 0.21*basico;    
                }
                else{
                    neto = 0.70*basico;
                    descuento = 0.30*basico;
                }
                document.getElementById("codigo").innerHTML = "Empleado Nº"+$scope.code;
                document.getElementById("basico").innerHTML = "Sueldo Básico: "+basico;
                document.getElementById("descuento").innerHTML = "Descuento: "+descuento;
                document.getElementById("neto").innerHTML = "Sueldo Neto: "+neto;
                
            }
        })