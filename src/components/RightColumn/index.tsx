import React from "react";

import LoadingTrendingPanel from "../Shimmer/LoadingTrendingPanel";
import TrendingPanel from "./TrendingPanel";

import { Container } from "./styles";

const RightColumn: React.FC<loadingProps> = ({ isLoading }) => {
    return (
        <Container className="right-column">
            {isLoading ? (
                <LoadingTrendingPanel />
            ) : (
                <>
                    <TrendingPanel />
                    <TrendingPanel />
                </>
            )}
        </Container>
    );
};

export default RightColumn;
