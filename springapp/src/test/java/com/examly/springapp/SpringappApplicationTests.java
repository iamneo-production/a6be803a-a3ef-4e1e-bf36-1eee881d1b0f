package com.examly.springapp;

import org.springframework.http.MediaType;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.examly.springapp.SpringappApplication;

import java.io.File;

@RunWith(SpringJUnit4ClassRunner.class) 
@SpringBootTest(classes = SpringappApplication.class)
@AutoConfigureMockMvc
class SpringappApplicationTests {
	
	@Autowired
	private MockMvc mockMvc;

	@Test
	void test_case1() throws Exception {
		String st = "{\"id\": 1, \"name\": \"john\", \"email\": \"john@gmail.com\", \"phone\": \"9876543211\", \"address\": \"coimbatore\", \"communicationHistory\": [\"c1\"], \"purchaseHistory\": [\"p1\"]}";
		mockMvc.perform(MockMvcRequestBuilders.post("/customer").contentType(MediaType.APPLICATION_JSON).content(st)
				.accept(MediaType.APPLICATION_JSON)).andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(jsonPath("$").value(true)).andReturn();
	}

	@Test
	void test_case2() throws Exception {

		mockMvc.perform(get("/customer/1").accept(MediaType.APPLICATION_JSON)).andDo(print()).andExpect(status().isOk())
				.andExpect(jsonPath("$.name").value("john")).andReturn();
	}

	@Test
	void test_case3() throws Exception {

		String st = "{\"id\": 1, \"name\": \"john\", \"email\": \"john@gmail.com\", \"phone\": \"9876543211\", \"address\": \"coimbatore\", \"communicationHistory\": [\"c1\"], \"purchaseHistory\": [\"p1\"]}";
		mockMvc.perform(MockMvcRequestBuilders.put("/customer/1").contentType(MediaType.APPLICATION_JSON).content(st)
				.accept(MediaType.APPLICATION_JSON)).andExpect(MockMvcResultMatchers.status().isOk()).andReturn();
	}

	@Test
	void test_case4() throws Exception {

		mockMvc.perform(get("/lead").accept(MediaType.APPLICATION_JSON)).andDo(print()).andExpect(status().isOk())
				.andExpect(jsonPath("$").isArray()).andReturn();
	}

	@Test
	void test_case5() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.delete("/lead/1").accept(MediaType.APPLICATION_JSON)).andDo(print())
				.andExpect(status().isOk()).andReturn();
	}

	@Test
	void test_case6() throws Exception {

		String st = "{\"id\":1,\"name\": \"lead1\",\"email\": \"john@gmail.com\",\"phone\": \"9875632485\",\"source\": \"client\",\"status\":\"done\",\"notes\":\"note\"}";
		mockMvc.perform(MockMvcRequestBuilders.post("/lead").contentType(MediaType.APPLICATION_JSON).content(st)
				.accept(MediaType.APPLICATION_JSON)).andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(jsonPath("$").value(true)).andReturn();
	}

	@Test
	void test_case7() throws Exception {

		mockMvc.perform(get("/lead/1").accept(MediaType.APPLICATION_JSON)).andDo(print()).andExpect(status().isOk())
				.andExpect(jsonPath("$.email").value("john@gmail.com")).andReturn();
	}

	@Test
	void test_case8() throws Exception {

		String st = "{\"id\":1,\"name\": \"lead2\",\"email\": \"john@gmail.com\",\"phone\": \"9875632485\",\"source\": \"client\",\"status\":\"done\",\"notes\":\"note\"}";
		mockMvc.perform(MockMvcRequestBuilders.put("/lead/1").contentType(MediaType.APPLICATION_JSON).content(st)
				.accept(MediaType.APPLICATION_JSON)).andExpect(MockMvcResultMatchers.status().isOk()).andReturn();
	}

	@Test
	void test_case9() throws Exception {

		mockMvc.perform(get("/lead").accept(MediaType.APPLICATION_JSON)).andDo(print()).andExpect(status().isOk())
				.andExpect(jsonPath("$").isArray()).andReturn();
	}

	@Test
	void test_case10() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.delete("/lead/1").accept(MediaType.APPLICATION_JSON)).andDo(print())
				.andExpect(status().isOk()).andReturn();
	}

}
