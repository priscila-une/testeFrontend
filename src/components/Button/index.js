import * as S from './styled';

const Button = ({children, className, onClick}) => {
    return (
        <S.Wrapper>
            <button type="button" className={className} onClick={onClick}>
                {children}
            </button>
        </S.Wrapper>
    )
}

export default Button;