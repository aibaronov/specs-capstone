# specs-capstone

### Enrypted Email Service

## Description

An email client designed for secret agents to convey sensitive secret agent information with each other using RSA encryption. Messages will be RSA encrypted and the secret agent will be provided a private key and instructed to relay the private key that the recieving party will need to decrypt the message. The user will be instructed to relay the private key to the other agent through whatever means they see fit. The agent on the other side will recieve an encrypted message and then be prompted for a private key. After entering the private key, the agent will be able to read the message.

## MVP
1. User can register for an account
2. User can log in to their account
3. User can view their message inbox
4. User can compose messages
5. User can delete messages
6. User can recieve verification emails after a message was decrypted by the recieving party
7. User can log out
8. Navigation bar to navigate the main page
9. Navigation bar to choose between composing new messages, reading recieved messages, or viewing the trash bin.

## Pages
1. Log-in
2. Register
3. Home
4. Compose Message
5. Message Inbox
6. About section that explains RSA encryption

## Future Features
1. Additional encyryption methods can be implemented
2. An outline of the encryption and decryption process can be viewed by sending and recieving parties to better understand the process of RSA encryption
