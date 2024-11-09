# GJP

GJP is a parameter commonly sent as `gjp` in requests. It is used for account authentication, and commonly sent with the `accountID` parameter. 
It was changed to `gjp2` in 2.2.

`gjp` probably means **G**eometry **J**ump **P**assword (Geometry dash was previously called "geometry jump")

## Generating GJP2

The GJP is your password, salted with "mI29fmAnxgTs" and hashed with SHA-1.

<!-- tabs:start -->

### **Python**
```py
import base64
import hashlib  # sha1() lives there


def generate_gjp2(password: str = "", salt: str = "mI29fmAnxgTs") -> str:
	password += salt
	hash = hashlib.sha1(password.encode()).hexdigest()

	return hash
```

Because your password is hashed, you cannot "decode" it back

## Old GJP Encoding/Decoding

The GJP is your account password XOR-encoded with key "37526", and then encoded with base64.

To decode, take the GJP and decode it from base64, then XOR-encode it again (XOR encoding and decoding is identical).

**The following code demonstrates this process programmatically:**

<!-- tabs:start -->

### **Python**

```py
import base64

def encode_gjp(password: str) -> str:
	# put it through the xor cipher with the key "37526")
	encoded = xor_cipher(password, "37526")
	# encode the password to base64
	encoded_base64 = base64.b64encode(encoded.encode()).decode()
	encoded_base64 = encoded_base64.replace("+", "-")
	encoded_base64 = encoded_base64.replace("/", "_")

	return encoded_base64

def decode_gjp(gjp: str) -> str:
	# decode the password from base64
	decoded_base64 = base64.b64decode(gjp.encode()).decode()
	# put it through the xor cipher with the key "37526")
	decoded = xor_cipher(decoded_base64, "37526")

	return decoded
```

<!-- tabs:end -->
