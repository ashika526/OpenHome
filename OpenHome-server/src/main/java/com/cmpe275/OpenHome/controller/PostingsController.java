package com.cmpe275.OpenHome.controller;

import com.cmpe275.OpenHome.DataObjects.PostingForm;
import com.cmpe275.OpenHome.model.Postings;
import com.cmpe275.OpenHome.service.PostingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLOutput;
import java.util.List;


@RestController
@RequestMapping("/api")
public class PostingsController {

    @Autowired
    private PostingsService postingsService;

    @CrossOrigin
    @GetMapping("/postings")
    public ResponseEntity<List<Postings>> getPostings() {
        List<Postings> postings = postingsService.getPostings();
        return ResponseEntity.ok().body(postings);
    }
    @CrossOrigin
    @PostMapping("/posting")
    public ResponseEntity<?> save(@RequestBody Postings postings) {
        System.out.println("Im am y7h6th");
        System.out.println(postings);
        long id = postingsService.save(postings);
        return ResponseEntity.ok().body("New Posting has been saved with ID:" + id);
    }

    @CrossOrigin
    @GetMapping("/posting/{id}")
    public ResponseEntity<?> get(@PathVariable("id") int id) {
        System.out.println("Posting posted" + id);
        Postings posting = postingsService.getPosting(id);
        System.out.print(posting);
        return ResponseEntity.ok().body(posting);
    }

    @CrossOrigin
    @DeleteMapping("/posting")
    public ResponseEntity<?> cancel(@RequestBody int id) {
        long deletedId = postingsService.deletePosting(id);
        return ResponseEntity.ok().body("Posting removed: " + deletedId);
    }

    @CrossOrigin
    @PutMapping("/postingAdd")
    public ResponseEntity<?> update( @RequestBody Postings postings) {
        System.out.println("Posting has been new addition");
        postingsService.update(postings);

        return ResponseEntity.ok().body("Posting has been updated successfully.");
    }

    @CrossOrigin
    @PutMapping("/posting/search")
    public ResponseEntity<?> search(@RequestBody PostingForm postings){
        List<Postings> postingsLists = postingsService.search(postings);
        return ResponseEntity.ok().body(postingsLists);
    }

}