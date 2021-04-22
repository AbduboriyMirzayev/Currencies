import styled from 'styled-components';

const S = {};


S.Inner = styled.div`
    padding:100px 0;
    .title{
        text-align:center;
    }

    .converter {
        display: flex;
        align-items: center;
        margin:30px 0;
    }

    .converter__block {
        border: 1px solid #ccc;
        padding:15px;
    }

    .converter__inner{
        display:flex;
        align-items:flex-end;
    }

    .ant-select-selector{
        border:transparent !important;
        border-bottom:1px solid #ccc !important;

    }

    .converter__select{
        width: 80px;
        border:none;
        margin-right:10px;
    }

    .converter__inp {
        width: 100%;
        max-width: 100px;
        border:1px solid transparent;
        border-bottom-color:#ccc;
        padding:5px;
    }

    .inner{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }

    .search-inner__inp{
        border:1px solid #ccc;
        padding:10px 20px;
    }

    .converter__title {
        font-size: 14px;
        color: #949393;
    }
    .card{
        width:100%;
    }

    .converter__icon{
        font-size:30px;
        margin:0 20px;
    }

    @media(max-width:720px){
        .converter__block{
            width:50%;
        }

        .converter{
            width:100%;
        }


        .inner{
            flex-direction:column;
            margin-bottom:50px;
            align-items:flex-end
        }
    }

    @media(max-width:600px){
        .converter{
            flex-direction:column;
        }
        .converter__block{
            width:100%;
        }
        .converter__icon{
            transform:rotate(90deg);
            margin:20px 0;
        }
        .search-inner{
            width:100%;
        }
        .search-inner__inp{
            width:100%;
            display:block
        }
    }
    
`;

S.Main = styled.div`

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap:5%;

    .card {
        border-radius: 4px;
        width: 100%;
    }

    .card__title {
        color: #949393;
    }

    .card__inner {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-top: 10px;
    }

    .card__block{
        display:flex;
        align-items:center;
    }

    .card__text--danger{
        color: #ef2222;
    }

    .card__text--success{
        color:green;
    }

    .card__text-icon{
        margin:0 10px;
    }

    .card__text{
        display:flex;
        align-items:center;
    }    

    


    @media(max-width:1060px){
        .card__item{
            width:50%;
        }
    }
    
    @media(max-width:720px){
        .card__item{
            width:100%;
        }
    }

`;

export default S;
