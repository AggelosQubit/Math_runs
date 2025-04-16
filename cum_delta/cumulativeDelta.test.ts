"use strict";
import { nullifyCDandNbOfDeltaConsumed } from "./src/KucoinComponent/KucoinAdapter";
import { CalculateCurrentCumDelta, getCurrentCumDeltaCore, getNumberOfDeltaConsumedCore } from "./src/cum_delta";

beforeEach(() => {
    nullifyCDandNbOfDeltaConsumed()
})
describe("Kucoin Suite Tests - Port ",
    () => {
        test("should nullifyCDandNbOfDeltaConsumed for getCurrentCumDeltaCore to be 0",
            () => {
                CalculateCurrentCumDelta({ size: 0.0208592, side: "sell", })
                nullifyCDandNbOfDeltaConsumed();
                expect(getCurrentCumDeltaCore()).toBe(0);
            }
        )
        test("should nullifyCDandNbOfDeltaConsumed for getNumberOfDeltaConsumedCore to be 0",
            () => {
                CalculateCurrentCumDelta({ size: 0.0208592, side: "sell", })
                nullifyCDandNbOfDeltaConsumed();
                expect(getCurrentCumDeltaCore()).toBe(0);
            }
        )
        test("should getCurrentCumDelta for Sell Order",
            () => {
                CalculateCurrentCumDelta({ size: 0.0208592, side: "sell", })
                expect(getCurrentCumDeltaCore()).toStrictEqual(-0.0208592);
            }
        )
        test("should getCurrentCumDelta for Buy Order",
            () => {
                CalculateCurrentCumDelta({ size: 0.0208592, side: "buy", })
                expect(getCurrentCumDeltaCore()).toStrictEqual(0.0208592);
            }
        )
        test("should numberOfConsumedtrades ",
            () => {
                CalculateCurrentCumDelta({ size: 0.0208592, side: "sell", })
                CalculateCurrentCumDelta({ size: 0.0208592, side: "buy", })
                console?.log(getNumberOfDeltaConsumedCore());
                expect(getNumberOfDeltaConsumedCore()).toStrictEqual(2);
            }
        )
    }

);