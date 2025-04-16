"use strict";
import { SpotMarketTradedOrder, AggresiveStrippedOrder, HistoricalTrades } from '../CustomTypesComponent/CustomTypes'
import {
    CalculateCurrentCumDelta,
    getCurrentCumDeltaCore,
    getNumberOfDeltaConsumedCore,
    setCurrentCumDeltaCore,
    setNumberOfDeltaConsumed
} from '../cum_delta';

export let allOrderTradedSides: AggresiveStrippedOrder[] = [];
export let historicalTradesBatch: HistoricalTrades;

export function transformNextOrderTradedSides(nextTradedOrder: SpotMarketTradedOrder) {
    if (nextTradedOrder.data != null || nextTradedOrder.data != undefined) {
        if (
            nextTradedOrder.data.side != undefined &&
            nextTradedOrder.data.size != undefined &&
            !Number.isNaN(parseFloat(nextTradedOrder.data.size))
        ) {
            CalculateCurrentCumDelta({
                side: nextTradedOrder.data.side,
                size: parseFloat(nextTradedOrder.data.size)
            });
            return { side: nextTradedOrder.data.side, size: parseFloat(nextTradedOrder.data.size) }
        }
        return null;
    }

}
export function transformHistoricalTrade(historicalTradesBatchParam: HistoricalTrades) {
    if (historicalTradesBatchParam.data != null || historicalTradesBatchParam.data != undefined) {
        historicalTradesBatch = historicalTradesBatchParam;
        nullifyCDandNbOfDeltaConsumed();
        for (let i = 0; i < historicalTradesBatchParam.data.length; i++)
            CalculateCurrentCumDelta({
                side: historicalTradesBatchParam.data[i].side,
                size: parseFloat(historicalTradesBatchParam.data[i].size)
            });
    }
}

export function nullifyCDandNbOfDeltaConsumed() {
    setCurrentCumDeltaCore(0);
    setNumberOfDeltaConsumed(0);
}
export function getCurrentCumDelta() {
    return getCurrentCumDeltaCore()
}

export function getNumberOfDeltaConsumed() {
    return getNumberOfDeltaConsumedCore()
}