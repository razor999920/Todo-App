package basics;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BasicAuthenticationController { // Handling HTTP requests

    @GetMapping(path = "/basicAuth")
    public AuthenticationBean HelloWorldBean() {
        return new AuthenticationBean("You are Authenticated");
    }

}
