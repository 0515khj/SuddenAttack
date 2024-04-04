import styled from "styled-components";

export const ContentStyle1 = styled.div`
background: #efefef;
    .inner {
        .con-box { display:flex; 
            .con1 {margin-right:100px;
                ul{
                    li{
                        border-bottom: 1px solid #dcdcdc;
                        font-size:17px;
                        padding:5px;
                    }
                }
                h3{ font-size:20px;}
                button{border: 1px solid #999; width:90px; height:30px; transition:0.3s;
                    &:hover {background: #37474F; color:#fff;}
                }
            }
            .con2 {
                    margin-right: 100px;
                .con2inner{ width:250px;
                    border-bottom: 1px solid #000;
                    h3 {  font-size:20px; }
                }
                .con21 {display:flex; margin-left:50px; margin-top:10px;
                    em{margin-right:5px;}
                    p{color:#999;}
                }
                .con22 {display:flex;  position: relative;
                    strong { font-weight:700; font-size:50px; margin-left: 60px; border-bottom: 2px solid #000;}
                    p{margin-left: 5px; position:absolute; right:75px; bottom: 12px; font-weight:500px; font-size:20px;}
                } 
                .con23 { display:flex; position: relative; margin-top: 10px;

                    .con231{ 
                        margin-left:20px;
                        margin-right:20px;
                        &::after{content:'';
                        display:block;
                        width:10px;
                        height:10px;
                        background: gold;
                        border-radius:50%;
                        position:absolute; top:50%; left: 5px;
                        transform:translateY(-50%)
                    }
                    }
                    .con232 { color:gold;
                        &::after {content:'';
                        display:block;
                        width:2px;
                        height :15px;
                        background: #999;
                        position:absolute; top:50%; left:100px;
                        transform:translateY(-50%)

                    }
                    }
                    .con233{ 
                        margin-left:20px;
                        margin-right:20px;

                        &::after{content:'';
                        display:block;
                        width:10px;
                        height:10px;
                        background: #d5d5d5;
                        border-radius:50%;
                        position:absolute; top:50%; right: 126px;
                        transform:translateY(-50%)
                    }

                    }

                    .con234 { font-weight:600;}
                    p{margin-right: 20px;}
                    .con24 { 
                        
                        p{border-top: 1px solid #000; }
                        
                    }
                }
            }
            .con3 { margin-right:100px ;
                    h3{font-size:20px;}
                .con3pic{
                    img{ border: 1px solid #999;margin-right:1px;}
                }
                .con3inner { margin-top:20px;
                    display:flex;
                    img{margin-right:5px;}
                    span{ color:#000; font-weight:600;} 
                    p{ line-height:50px; font-size:20px; color:#999}
                }
                
            }
            .con4 {

                .con41 {
                    img{width:200px; height: 100px;}
                    p{
                        strong{font-weight:700; margin-right: 10px;}
                    }
                }
                .con42 {
                    img{width:200px; height: 100px;}
                    p{
                        strong{font-weight:700; margin-right: 10px;}
                    }
                }

            }
        }
    }

`
export const Content2Wrap =styled.div`


`