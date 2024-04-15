<template>
  <div class="text-view">
    <h2>Brief Literature Review</h2>

    <p> As a complex derivative, the value of convertible bonds is interconnected with the endogenous
    bond value and option value, and the difficulty of pricing convertible bonds is enhanced by the
    existence of four special terms. Therefore, the study of pricing models for convertible bonds has
    been a key area of concern for scholars and the market.</p>
    <p>The pricing model of convertible bonds can be divided into analytical method and numerical
    method according to the calculation method, structural model and simplicity model according to the
    research target, and single-factor model and multi-factor model according to the factor
    composition.</p>
    <p>In the 1970s, Ingersol (1977) proposed a structured pricing model for convertible bonds based
    on the B-S option formula and Merton's risk-to-debt ratio. Ingersol's structured model is a singlefactor pricing model based on the total market value of the company, which considers the changes
    in the value of the company and the time to fluctuate the price of the convertible bonds to be the
    main factors of price volatility, and therefore splits the value of the convertible bonds into two.
    However, the problem with this model is that it does not take into account the enforcement of
    redemption and downward modification clauses, and the assumptions on interest rates are not
    reasonable.</p>
    <p> In contrast to the structured model, the underlying asset of the parsimonious model is the stock
    price. In terms of pricing ideas, parsimonious models can be divided into two types: disaggregated
    pricing and holistic pricing. The idea of decomposition pricing method is to simplify the value of
    convertible bonds into the sum of the pure bond value and the embedded option value, so that the
    two types of values can be calculated separately to sum up the total value of convertible bonds. The
    decomposition pricing method is relatively more intuitive and efficient, but the shortcoming is that
    it ignores the interaction between the embedded option and the pure bond value of the convertible
    bond, thus causing pricing errors.</p>
    <p> Compared with the complicated and diverse pricing models of convertible bonds, there are
    fewer domestic and international studies on the timing of convertible bonds. Securities timing
    methods are mainly divided into technical indicator timing and machine learning timing. No matter
    what kind of timing, it is the negation of Fama's (1970) efficient market hypothesis, because the
    core principle of timing is to explore the market trend to obtain excess returns by studying the
    changing law of historical data.</p>
    <p>With the rise of machine learning and data mining, more and more scientific and technological
    models have been applied to the study of financial market timing. Farmer and Sidorowich (1980)
    used wavelet analysis theory, combined with the principle of dynamics to forecast the stock market,
    proving the existence of chaos.Wei Huang (2005) empirically examined that in the A-share market,
    a data mining-based nonlinear prediction models outperform linear models. Lu Feipeng (2014)
    constructed a time-timing strategy using the Hurst index based on fractal theory, and the strategy
    achieved stable returns in the CSI 300 stock market. Song Wenda (2017) selected time series
    indicators and technical indicators as features to train a support vector machine model for timing
    the CSI 300 index and verified its effectiveness</p>

    <h2>Proposed Methodology</h2>

    <p>In order to achieve various goals of the project, we will use methods close to the financial
    industry to achieve basic requirements, and use cutting-edge time series technology to
    optimize the effect.</p>
    <p>Specifically, we will first analyze China's convertible bond market in terms of size, number
    of issuances, market participants, exit channels, etc., and focus on observing the difference
    between it and the stock market performance in the same period. After gaining an in-depth
    understanding of China's convertible bond market, we will focus on the specific terms of
    convertible bonds and interpret the investment opportunities contained therein.</p>
    <p>After completing the above basic analysis, we will explore various convertible bond factors
    based on the volume-price relationship and convertible bond pricing theory, including
    technology, pricing, valuation, terms, underlying stock prosperity, and volatility.
    At the same time, we will also use python to develop a simple convertible bond trading
    simulation system and backtesting system. The system will simulate our strategy and
    analyze the return of the strategy (annualized return, Sharpe ratio, excess return, maximum
    drawdown, etc.)</p>
    <p>After we have enough convertible bond factors and backtest trading systems, we will
    integrate factors based on traditional multi-factor investment methods and advanced
    machine learning and deep learning time series modeling methods to screen convertible
    bonds worth investing in.</p>
    We will also update the project progress on our project webpage.(Still working on it) </p>
  </div>
</template>

<script>
export default {
  name: "ResearchProposal"
}
</script>

<style scoped>

</style>
