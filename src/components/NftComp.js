import React, { Component } from 'react'

class NftComp extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
<div id="content" className="mt-3">
<div className="card mb-4" >

        <h2> Mint Your Own NFT </h2>
        <h6>Step 1. Upload your file to pinata cloud.</h6>
        <h6>Step 2. Upload your metadata(json) to pinata cloud.</h6>
        <h6>Step 3. Copy the CID(Content Identifier) from pinata and paste as tokenURI.</h6>
        <h6>Step 4. Complete the transaction and verify the ownership.</h6>
        <h6>Step 5. Get the tokenId using transaction hash.</h6>


<div className="card-body">

        <form className="mb-3" onSubmit={(event) => {
          event.preventDefault()
          let tokenuri
          tokenuri = event.target.uri.value.toString()
          alert(tokenuri);
          this.props.mintNFTs(tokenuri)
        }}>

      <div className="input-group mb-4">
          <input
            type="text"
            name="uri"
            onChange={(event) => {
              const tokenuri = this.input.value
            }}
            ref={(input) => { this.input = input }}
            className="form-control form-control-lg"
            placeholder="ipfs/QmPAkZLi3ujkZKZP6JVjTeB8kFQBEdhnf6UHd6uZ5NUu3R"
            required />
          <div className="input-group-append">
            <div className="input-group-text">
              &nbsp;&nbsp;&nbsp; Token URI  
            </div>
          </div>
        </div> 

        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder={this.props.account}
            disabled />
          <div className="input-group-append">
            <div className="input-group-text">
              &nbsp;&nbsp;&nbsp; Your Address
            </div>
          </div>
        </div>
       

       <div className="input-group mb-4">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder= { window.web3.utils.fromWei(this.props.ethBalance,'ether')}
            disabled />
          <div className="input-group-append">
            <div className="input-group-text">
              &nbsp;&nbsp;&nbsp; Eth Balance
            </div>
          </div>
        </div>
       
      <button type="submit" className="btn btn-primary btn-block btn-lg">Mint NFT</button>
      
      </form>

          </div>

        </div>


<div className="card mb-4" >

        <h2> Verify NFT Ownership / TokenID </h2>
     
<div className="card-body">

        <form className="mb-3" onSubmit={(event) => {
          event.preventDefault()
          let addresss
          addresss = event.target.add.value.toString()
          alert(addresss);
          this.props.balanceOf(addresss)
        }}>

      <div className="input-group mb-4">
          <input
            type="text"
            name="add"
            onChange={(event) => {
              const addresss = this.input.value
            }}
            ref={(input) => { this.input = input }}
            className="form-control form-control-lg"
            placeholder="0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"
            required />
          <div className="input-group-append">
            <div className="input-group-text">
              &nbsp;&nbsp;&nbsp;  Address
            </div>
          </div>
        </div> 


          <div className="input-group mb-4">
          <input
            type="text"
            className="form-control form-control-lg"
            value = {this.props.nftBalance}
            disabled />
          <div className="input-group-append">
            <div className="input-group-text">
              &nbsp;&nbsp;&nbsp; NFT Balance
            </div>
          </div>
        </div>
       
      <button type="submit" className="btn btn-primary btn-block btn-lg">Get Info</button>
      
      </form>

          </div>

        </div>


<div className="card mb-4" >

        <h2> Transfer NFT Ownership </h2>
     
<div className="card-body">

        <form className="mb-3" onSubmit={(event) => {
          event.preventDefault()
          let buyer
          buyer = event.target.buyer.value.toString()
           let ids
          ids = event.target.ids.value.toString()
          alert(buyer + ids)
          this.props.nftTransfer(buyer,ids)
        }}>

      <div className="input-group mb-4">
          <input
            type="text"
            name="buyer"
            ref={(input) => { this.input = input }}
            className="form-control form-control-lg"
            placeholder="0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"
            required />
          <div className="input-group-append">
            <div className="input-group-text">
              &nbsp;&nbsp;&nbsp; Buyer Address
            </div>
          </div>
        </div> 


          <div className="input-group mb-4">
          <input
            type="text"
            name="ids"
            className="form-control form-control-lg"
            placeholder = "2345"
            required />
          <div className="input-group-append">
            <div className="input-group-text">
              &nbsp;&nbsp;&nbsp; TokenID
            </div>
          </div>
        </div>
       
      <button type="submit" className="btn btn-primary btn-block btn-lg">Transfer Ownership</button>
      
      </form>

          </div>

        </div>


      </div>


    );
  }
}

export default NftComp;
