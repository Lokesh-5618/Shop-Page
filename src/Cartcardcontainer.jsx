.cont {
    max-width: 700px;
    margin: 24px auto;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    overflow: hidden;
}

.total {
    max-width: 700px;
    margin: 24px auto 0;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    padding: 14px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    font-weight: 700;
    color: #222;
}

.total div:last-child {
    color: #4f8ef7;
    font-size: 1.1rem;
}

@media (max-width: 768px) {
    .cont,
    .total {
        margin: 16px;
    }
}
