package com.rohin.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.rohin.modal.Coin;
import com.rohin.service.CoinService.CoinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/coins")
public class CoinController {

    @Autowired
    private CoinService coinService;

    @Autowired
    private ObjectMapper objectMapper;

    @GetMapping
    ResponseEntity<List<Coin>> getCoinList(@RequestParam(required = false,name="page") int page) throws Exception {
        List<Coin> coins = coinService.getCoinlist(page);
        return new ResponseEntity<>(coins, HttpStatus.ACCEPTED);
    }

    @GetMapping("/{coinId}/chart")
    ResponseEntity<JsonNode> getMarketChart(
            @PathVariable String coinId,
            @RequestParam("days")int days
    ) throws Exception {
        String res = coinService.getMarketChart(coinId, days);
        JsonNode jsonNode = objectMapper.readTree(res);
        return new ResponseEntity<>(jsonNode, HttpStatus.ACCEPTED);
    }

    @GetMapping("/search")
    ResponseEntity<JsonNode> searchCoin(@RequestParam("q") String keyword) throws Exception {
        String coin = coinService.searchCoin(keyword);
        JsonNode jsonNode = objectMapper.readTree(coin);

        return ResponseEntity.ok(jsonNode);
    }

    @GetMapping("/top50")
    ResponseEntity<JsonNode> getTop50CoinByMarketCapRank() throws Exception {
        String coin = coinService.getTop50CoinByMarketCapRank();
        JsonNode jsonNode = objectMapper.readTree(coin);

        return ResponseEntity.ok(jsonNode);
    }

    @GetMapping("/trading")
    ResponseEntity<JsonNode> getTradingCoin() throws Exception {
        String coin = coinService.getTrendingCoins();
        JsonNode jsonNode = objectMapper.readTree(coin);

        return ResponseEntity.ok(jsonNode);
    }

    @GetMapping("/details/{coinId}")
    ResponseEntity<JsonNode> getCoinDetails(@PathVariable String coinId) throws Exception {
        String coin = coinService.getCoinDetails(coinId);
        JsonNode jsonNode = objectMapper.readTree(coin);

        return ResponseEntity.ok(jsonNode);
    }
}
